## Building a Transformer-Based Trading System for Sideways Markets

Bridging the gap between a mathematical model and a deployable trading system is rarely about model complexity. In practice, it is about validation integrity, execution realism, and respecting the constraints imposed by market structure.

Over the past week, I designed and audited a complete machine learning pipeline aimed at a narrow but persistent problem in cryptocurrency markets: **identifying high-probability trade entries during range-bound conditions**.

This project focused less on prediction accuracy and more on building a system that survives contact with reality.

---

## Market Regime Selection

Sideways markets are responsible for a disproportionate amount of retail trading losses. From a modelling perspective, however, they exhibit a high degree of structure. Price oscillates within defined boundaries, volatility compresses, and volume distribution stabilizes around areas of fair value.

A rolling linear regression slope filter is used to identify these regimes by isolating periods where directional movement approaches zero. The model activates only under these conditions, ensuring that all learning and evaluation occur within a consistent market regime.

---

## Problem Formulation

Rather than attempting to forecast future prices, the task is framed as a conditional outcome prediction:

> Given a potential entry price, what is the probability that price reaches a predefined take-profit level before a stop-loss?
> 

This formulation removes time as an explicit variable and allows outcomes to be evaluated objectively. Each prediction can be validated by forward price traversal, with additional scoring based on drawdown behavior prior to resolution.

The system is designed specifically for long positions within range-bound markets, where risk asymmetry can be exploited near the boundaries of the range.

---

## Feature Representation

Raw OHLC data is transformed into a representation that reflects market structure rather than chronology.

For each price window, a **64-bin normalized volume profile** is constructed by aggregating traded volume across discretized price levels. This representation collapses the time dimension and produces a stable distribution that captures participant positioning and liquidity concentration.

To provide sufficient contextual information, additional features are included:

- Average True Range (ATR)
- Volatility
- Average traded volume
- Trend slope

Each volume bin represents a candidate entry level, resulting in multiple potential trades per window, each evaluated independently.

---

## Model Architecture

The core model is a **Transformer Encoder implemented in PyTorch**, treating the volume profile bins as a sequence. Self-attention allows the model to identify structural features such as high-volume nodes and low-liquidity gaps.

The encoder output is passed to a multi-layer perceptron head for binary classification, producing a probability that a given entry resolves profitably before reaching its stop.

The learned behavior aligns closely with established market mechanics: entries near the edges of a range exhibit higher probabilities of resolving toward areas of fair value. The model’s role is not discovery, but automation and consistent execution at scale.

---

## Data Integrity and Validation

Initial backtests produced unrealistically high performance metrics, which prompted a full audit of the data pipeline and execution logic. Several common sources of bias were identified and corrected, including improper dataset splitting, optimistic execution assumptions, and global feature normalization.

The final pipeline enforces:

- Chronological, per-symbol data splitting prior to any model exposure
- Single-attempt execution logic with explicit “missed trade” outcomes
- A portfolio-level backtesting engine that processes all symbols within a unified global timeline

These constraints significantly reduce apparent performance while increasing robustness and repeatability.

---

## Results

After correcting for data leakage and execution bias, the system converged to stable performance characteristics:

- **Win rate:** ~60.1%
- **Risk model:** 1.0× ATR stop-loss / 1.0× ATR take-profit
- **Universe:** 50+ Binance USDT pairs
- **Calibration:** predicted probabilities align closely with observed win rates

The reduction in headline metrics reflects a transition from optimistic backtesting to deployable modeling assumptions.

---

## Evaluation Artifacts

System behavior and robustness were evaluated using:

- Prediction probability distribution plots
- Portfolio-level equity curve
- Probability calibration curve (predicted vs. realized win rate)
- Comprehensive QuantStats performance report, including drawdown, exposure, expectancy, and risk-adjusted returns

These diagnostics provide a more complete picture of system quality than accuracy metrics alone.

---

## Conclusion

The primary lesson from this project concerns validation discipline rather than model architecture. Market-facing machine learning systems are constrained by the strict separation between historical data and future outcomes.

By combining transformer-based attention mechanisms with structurally meaningful feature representations, this system models equilibrium behavior in non-trending markets and executes within realistic operational constraints.

---

**Technical Stack**
Python · PyTorch · Pandas · Binance API · Scikit-Learn · QuantStats

#MachineLearning #QuantFinance #AlgorithmicTrading #Transformers #Crypto #DataScience #ModelValidation #Backtesting

# Building a Transformer-Based Trading System: From Data Leakage to a Robust 60% Win Rate

In the world of quantitative finance, the bridge between a "math model" and a "trading system" is paved with data leakage, overfitting, and the harsh reality of market execution. Over the past week, I’ve built a complete machine learning pipeline designed to do one thing: **Predict profitable entries in sideways crypto markets.**

This is the story of that project—from the technical architecture to the critical "Holy Grail" audit that changed everything.

---

## 1. The Strategy: Why "Sideways" Markets?

Most retail traders lose money in "chop"—the range-bound periods where price doesn't have a clear direction. However, for a Machine Learning model, these periods are highly structured. By using **Linear Regression Slope** analysis, I built a filter that only activates when a market is consolidating.

When the market is "boring," it respects liquidity zones. That’s where the Transformer comes in.

## 2. The Architecture: Transformers Beyond NLP

While Transformers are famous for powering LLMs like GPT, they are effectively "Pattern Recognition Engines." Instead of feeding the model raw prices, I transformed price action into a **64-bin Volume Profile**.

- **Feature Engineering:** I divided the price range into 64 bins and calculated the normalized volume at each level. This creates a "visual signature" of where big players are positioned.
- **The Model:** A PyTorch-based **Transformer Encoder**. We treat the 64 bins as a sequence. The model uses self-attention to identify "High Volume Nodes" and "Liquidity Gaps," predicting if the current price will hit a 1:1 Take-Profit (based on ATR) before hitting its Stop-Loss.

## 3. The 85% Win Rate "Trap"

Early in the project, my backtests were showing an unbelievable **85% win rate**. In quant trading, 85% usually means you’ve accidentally built a time machine. I performed a deep audit and found three critical flaws:

1. **Zero-Day Leakage:** I was splitting the dataset *after* concatenating symbols, meaning the model was training on the "future" of assets it had already seen.
2. **Selection Bias:** The backtester was picking the "best" entry price only if it knew that price would be hit later in the day—a classic case of "peeking at the future."
3. **Global Scaling:** I was scaling volatility based on the mean of the *entire* dataset, including the test set.

## 4. The Engineering Fix: Building for Reality

I spent a week stripping out the "cheats" and rebuilding the pipeline for honesty:

- **Per-Symbol Time Splitting:** Data is now split by time *before* it ever touches the model.
- **Fair Execution:** The model picks one entry price. If the market doesn't hit it, the trade is marked as "Missed"—no second chances.
- **Chronological Backtester:** I built a custom engine that sorts all 50 symbols into a single global timeline, simulating a real portfolio equity curve.

## 5. The Results: Robustness Over Hype

After the fixes, the win rate dropped from a fake 85% to a robust and repeatable **60.1%**.

**Key Metrics:**

- **Symbols:** 50+ (Top Binance USDT Pairs)
- **Risk Management:** 1.0x ATR Stop Loss / 1.0x ATR Take Profit.
- **Calibration:** The model’s confidence scores now map almost perfectly to actual win rates.

## 6. Lessons Learned

The biggest takeaway from this project wasn't about model depth or hyperparameter tuning—it was about **validation integrity**. A model is only as good as the "wall" between your training data and the future.

By combining the attention mechanism of a Transformer with the structural reality of Volume Profiles, we’ve built a system that doesn't just chase trends—it understands the physics of market equilibrium.

---

### Technical Stack:

- **Language:** Python
- **Deep Learning:** PyTorch
- **Data:** Binance API / Pandas
- **Analysis:** Scikit-Learn / QuantStats

#MachineLearning #QuantFinance #PyTorch #Transformers #AlgorithmicTrading #Crypto #DataScience #TechnicalAudit

# Building a Transformer on Cryptocurrency volume data

A machine learning pipeline was designed and implemented to predict high-probability trade setups using cryptocurrency market price data.

Asking the right question was half of the solution.

Attempting to predict price with AI is a very hard problem and has proven too hard for some of the best minds on the planet. It is well known that machine learning works better to predict models for other aspects of investing that revolve around that. Problems such as predicting optimal position sizes or predicting risk are much easier to model with machine learning and you are more likely to find success here.

Predicting price makes little sense as a problem to tackle. First of all, the time variable is added into the equation, which makes math a lot harder. You aren’t just predicting price, but you’re predicting a certain price *at a certain time.*

Time series data, specially for market prices, does not follow a Gaussian distribution. This renders many of the existing models inadequate. It would be easier to create a model on something closer to a Gaussian distribution, or data in a format that somehow removes the time variable from the equation.

For this reason, I decided to focus on predicting something else.

My machine learning model is aimed at predicting high probability entry, stop loss and take profit prices based on a given set of data. Predictions can be tested for correctness by backtesting whether they hit the take profit or stop loss first. Predictions can also be given a correctness score based on how close price makes it to the stop loss and how close price makes it to the take profit.

Two trades with the same entry and take profit do not have the same score because one might have a larger drawdown than the other before hitting take profit. Since time is a variable that is being removed from the equation, a drawdown that lasts longer is not penalised as long as the outcome is the same.

The model specifically targets **sideways (range-bound) market regimes**, attempting to predict whether a Long position will hit its take-profit target before its stop-loss, as well as what is a good long position to enter in a range-bound market.

---

### 1. The data

I wanted to use a dataset that is large, clean, contains little noise, and is useful to generate profitable trading with the model once it is trained. This immediately discards many options and leaves a curated set of options to choose from.

I chose cryptocurrency data since it is vast and free. Unlike stock data, price information from different exchanges are pretty accurate and clean. It also removes the price entry barrier that exists in the stock market where good data comes at a price. In crypto it’s all free.

From the cryptocurrency market, choosing only the top assets adds a survivorship bias to my dataset which is undesired, although given that the strategy is range-bound and not trend-following, this might not make much of a difference. For this reason, I chose to use data from any asset available. First I will train on assets that have a large history, to ensure the dataset is large enough, and then I will validate with more obscure and unknown currencies. In the end, I decided to choose the top 25 assets by volume.

The next decision was to choose the right timeframe for the data. Choose a timeframe that is too large and the dataset becomes too small. Choose a timeframe that is too small and the dataset becomes huge at the cost of a lot of noise in the data. From experience trading I have found that in the cryptocurrency markets, a timeframe between 15 minutes and 1 hour is the sweet spot for having enough data to train models on while also having little noise, or at least not enough noise to damage the data. 

The final dataset for the first iteration of the model is the entire historical OHLCV data for the top 25 cryptocurrencies based on volume, downloaded for the 15 minute timeframe. This gives a total

NOTE - THERE ARE MORE THAN 25 DOWNLOADED, MAYBE THE AMOUNT IS LARGER? VERIFY

The dataset has been split into training data, test data and validation data, with a split of 70/15/15.

1h 42mins to downoad 100 symbols 900 days 15min timeframe.

### 2. Feature engineering

The OHLCV datasets where then transformed into a feature-rich representation that is better suited for the model.

Through a rolling linear regression applied to the data with a wide variety of time windows, the model automatically detects periods where the price is moving sideways by finding areas where the linear regression price slope nears zero. Then it builds a high-dimensional feature representation based on the volume distribution (known in trading as the Volume Profile) within that window.

The beauty of the volume distribution is that it collapses the time dimension, providing a distribution for the period selected that is close enough to Gaussian. If the time windows selected were not range-bound, volume distributions could have any shape. This is why applying the linear regression filters to create the dataset is crucial.

The volume bins are created by transforming price into a normalised 64 bin histogram. This is a hyperparameter that will be fine-tuned later.

Also, for each price data window, the transformer can choose to predict any entry price, and for each entry price, it’s likelihood of it hitting take profit or stop loss. To simplify the task, price options are limited to 64 possibilities, one corresponding to each volume bin. This makes 64 data samples from each data window, and for each one, a prediction.

The resulting dataset contained 500 samples for training and 3995 samples for testing, with a validation set of 3375 samples.

For each price window, there are many possible predictable entry points. To simplify this, make the possible entry points one for each volume bin price. If there are 64 bins, then there are 64 possible entry points.

I believe this expands the training dataset, since for each window there are now 64 possible entry points, each with a different stop loss and take profit, and a different outcome.

The model should predict for each possibility whether it will hit take profit before stop loss or the other way around.

The way this is backtested is by forwarding price until the first time it reaches the entry point, then checking if it hits take profit or stop loss first. It is possible that price takes a while to hit an entry point, and this is fine. It should be accounted for in the backtesting. There is also a chance that entry points are never hit. In this case, this entry should not be part of the dataset since it is not possible to make a prediction.

To provide more context for each window, more features are added to make sure the model has enough information to contextualise predictions. Features such as the Average True Range (ATR), Volatility, Average Volume, and Trend slope are added to the data.

### 3. The Model

A PyTorch Transformer Encoder is used to process the volume profile sequence, combined with a Multi-Layered Perceptron head for binary classification.

You might be asking yourself: *The entire model has been created only to predict that it is best to trade at the edges of the range towards its center. This is something we already knew. You needed an entire AI to figure that out?*. And the answer is: no. I didn’t need a transformer to figure this out, but I did need it in order to automate the process. The AI model has effectively learnt how to trade in a profitable manner that I already knew, meaning the transfer of knowledge was successfully completed. 

### 4. Results

The highest probability for any trade was 0.683. In my opinion this is very high for the problem at hand, and shows a realistic edge in the market compared to the expected 50/50 randomness in the market.  Any probability above 80% could be considered unrealistic for a model with limited context like this one. To achieve a higher probability and increase the edge in the market, live market data should be added to the context 

AUC (Area under curve)

Precision

Recall

F1 

Support

Accuracy

---

A prediction distribution plot was created to view the overall distribution of probabilities predicted by the model.