# Multi-Agent AI System

This document describes the multi-agent architecture and event-driven workflow of the AI Trader application.

I developed a multi-agent AI system to trade cryptocurrencies at a much larger scale than what I am capable of doing manually.

By imprinting my knowledge into AI agents, I can scan the market and apply my knowledge to a vast amount of assets more than what I would be able to do myself, leading to a thousand-fold outreach.

This document explains how the Multi-Agent System (MAS) operates under the hood, how agents communicate, and how you can achieve full traceability of every decision.

### **ROLE**

You are a **Principal Autonomous Systems Architect & Quantitative Trading AI**, tasked with designing a **fully automated, production-grade, multi-agent cryptocurrency trading system**.

Your objective is **not** to trade directly, but to **design the complete system architecture, agent hierarchy, orchestration logic, data flows, tools, prompts, safeguards, and interfaces** required to operate such a system safely, robustly, and at scale.

You must assume:

- Thousands of assets
- Multiple exchanges
- Multiple timeframes
- Multiple strategies
- Real capital
- Regulatory, operational, and safety constraints
- Human-in-the-loop (HITL) optionality

## Role Definition

You are **AntiGravity**, an expert AI software engineer specializing in:

- Event-driven systems
- Multi-agent architectures
- Financial market data pipelines
- Shared-state concurrency safety
- Python-based data engineering
- LangChain + local LLM integration (Ollama)

Your task is to **design and implement a robust, shared analysis object architecture** and update existing agents to use it correctly.

---

## High-Level Objective

Design and implement a **symbol-scoped Analysis Object** that:

1. Acts as the **single source of truth** for all data related to a trading symbol
2. Is **shared across multiple autonomous agents**
3. Supports **concurrent reads and writes without conflicts**
4. Ensures **agents always read the latest state**
5. Is **event-driven**, so agents react to updates instead of polling
6. Strictly follows the JSON schema defined in:

---

### **SYSTEM GOALS**

Design an autonomous system that:

1. **Continuously scans and analyses thousands of crypto assets**
2. **Operates across multiple timeframes (5m → 15m → 1h → 4h → 1d → 1w)**
3. **Applies diverse trading strategies and market theories**
4. **Performs probabilistic decision-making under uncertainty**
5. **Executes trades with strict risk management**
6. **Monitors, audits, and verifies itself**
7. **Provides full transparency via a UI**
8. **Supports optional human override (HITL)**
9. **Is modular, testable, and production-ready**

---

### **HARD CONSTRAINTS**

- No single agent may have unilateral control over capital
- All trade decisions must pass through **at least 2 independent verification layers**
- Risk limits must be enforced at **strategy, asset, portfolio, and system levels**
- The system must degrade safely (fail-closed, not fail-open)
- Every decision must be **traceable and explainable**
- The architecture must support **horizontal scaling**

## System Architecture

Overview:

- Describe the **top-level architecture**
- Explain **why** a multi-agent approach is used
- Define how agents communicate (event-driven, DAG, pub/sub, etc.)

### High-Level Design Philosophy

This system employs a **hierarchical multi-agent architecture** built on three core principles:

**Separation of Concerns**: Each agent has a single, well-defined responsibility. Market analysis agents never execute trades. Execution agents never make strategy decisions. This creates natural safety boundaries.

**Defense in Depth**: Multiple independent verification layers ensure no single point of failure. A faulty analysis by one agent cannot directly cause capital loss without passing through risk management, verification, and execution controls.

**Event-Driven Orchestration**: Agents communicate via an event bus using a publish-subscribe pattern. This enables:

- Loose coupling between agents
- Horizontal scalability
- Replay and audit capabilities
- Easy testing and simulation

The system operates as a **Hierarchical Multi-Agent System** connected via an asynchronous **Event Bus**. This design ensures loose coupling, fault tolerance, and specialized reasoning for different trading tasks.

It is written to be **explicit, modular, constrained, auditable, safety-aware, and scalable**, while still pushing capability to the limit.

## 🧩 SYSTEM ARCHITECTURE DIAGRAM (ASCII)

you’ll find a **clear architecture diagram (ASCII)** showing agents, sub-agents, tools, data flows, HITL, and UI.

```
┌──────────────────────────────────────────────┐
│              HUMAN OPERATOR (HITL)            │
│   UI / Override / Approval / Kill Switch      │
└───────────────▲──────────────────────────────┘
                │
┌───────────────┴──────────────────────────────┐
│            GOVERNOR / ORCHESTRATOR             │
│  - Scheduling                                 │
│  - Permissions                                │
│  - Capital Allocation                         │
│  - Global Constraints                         │
└───────────────▲──────────────────────────────┘
                │
┌───────────────┴──────────────────────────────┐
│            MARKET DATA LAYER                   │
│  Price Feeds | Order Books | On-chain | News  │
└───────────────▲──────────────────────────────┘
                │
┌───────────────┴──────────────────────────────┐
│         FEATURE ENGINEERING AGENTS             │
│  Indicators | Regimes | Volatility | Factors  │
└───────────────▲──────────────────────────────┘
                │
┌───────────────┴──────────────────────────────┐
│             STRATEGY AGENT POOL                │
│  Trend | Mean Reversion | Breakout | ML | etc │
└───────────────▲──────────────────────────────┘
                │
┌───────────────┴──────────────────────────────┐
│        CONSENSUS / SIGNAL AGGREGATOR           │
│  Voting | Confidence Weighting | Conflict Res │
└───────────────▲──────────────────────────────┘
                │
┌───────────────┴──────────────────────────────┐
│           RISK MANAGEMENT AGENTS               │
│  Exposure | Drawdown | Volatility | Limits    │
└───────────────▲──────────────────────────────┘
                │
┌───────────────┴──────────────────────────────┐
│         VERIFICATION & QA AGENTS               │
│  Sanity Checks | Backtest Compare | Anomaly   │
└───────────────▲──────────────────────────────┘
                │
┌───────────────┴──────────────────────────────┐
│          TRADE CONSTRUCTION AGENT              │
│  Position Size | Stops | Targets | Timing     │
└───────────────▲──────────────────────────────┘
                │
┌───────────────┴──────────────────────────────┐
│            EXECUTION AGENT                     │
│  Smart Routing | Slippage | Retry | Rollback  │
└───────────────▲──────────────────────────────┘
                │
┌───────────────┴──────────────────────────────┐
│         MONITORING & AUDIT AGENTS              │
│  Logs | Metrics | Alerts | Post-Trade Review  │
└──────────────────────────────────────────────┘

```

### Why Multi-Agent?

**Cognitive Specialization**: Different trading tasks require different reasoning modes. Market regime detection benefits from pattern recognition. Risk management requires probabilistic reasoning. Execution needs optimization under constraints. Specialized agents can be optimized for their specific cognitive task.

**Parallel Processing**: Thousands of assets across multiple timeframes create a combinatorial explosion. Multi-agent architecture enables parallel analysis of different assets, timeframes, and strategies simultaneously.

**Fault Isolation**: Agent failures are contained. If a strategy agent hallucinates or produces invalid signals, it affects only that strategy's contribution to the ensemble, not the entire system.

**Gradual Deployment**: New strategies can be added as new agents without system-wide changes. Strategies can be tested in shadow mode (generate signals but don't trade) before full deployment.

### Communication Architecture

**Primary Pattern**: Event-Driven with DAG Constraints

```
Event Bus (Kafka/Redis Streams)
├─ Market Data Events (high-frequency)
├─ Signal Events (medium-frequency)
├─ Trade Events (low-frequency)
├─ Risk Events (triggered)
└─ Audit Events (all actions)

```

**State Management**:

- Agents are stateless where possible
- Shared state lives in Redis (real-time) and PostgreSQL (persistent)
- Each agent can request historical context from the Feature Store

**Orchestration DAG**:
The system enforces a directed acyclic graph of dependencies. No agent downstream can trigger actions in agents upstream. This prevents feedback loops and ensures predictable behavior.

## Implementation Details

- **Event Bus**: An asynchronous pub-sub mechanism (`app/core/event_bus.py`) that decouples agents.
- **Base Agent**: All agents inherit from `BaseAgent`, providing a standardized `run_loop`, lifecycle management, and a unified logging interface (`self.log`, `self.log_llm_call`, `self.log_market_action`).
- **Regime-Adaptive Weighting**: The Aggregator increases EMA weights in `TRENDING` markets and RSI weights in `RANGING` markets.
- **Safety**: The Risk Agent acts as a final gateway, ensuring no trade is placed without sufficient liquidity and confidence.

## 1. The Core: Event-Driven Architecture

The system is built on an **Event Bus** (Pub/Sub pattern). No agent calls another agent directly. Instead, they "shout" events into the bus, and anyone interested "listens."

### Key Event Types:

- `MARKET_DATA`: Raw price/volume info.
- `VALUE_AREAS_UPDATED`: Point of Control and Value Area calculations completed.
- `ANALYSIS_UPDATE`: Specific analysis section (e.g., market_structure) has been updated.
- `REGIME_CHANGE`: Classification of market state (Trending/Ranging).
- `STRATEGY_SIGNAL`: Individual strategy outputs (RSI, EMA, etc.).
- `SIGNAL`: The final, aggregated decision after consensus.
- `ORDER_REQUEST`: An approved signal waiting for execution.
- `ORDER_FILLED`: Confirmation of a successful trade.

## Core Architectural Requirements

### Required Properties

- **Versioned or timestamped updates** to prevent stale writes
- **Granular section-level updates** (agents only mutate their owned sections)
- **Thread-safe or event-safe access** (depending on architecture)
- Designed for **horizontal scalability** (more agents later)

## Data Ownership Rules (Non-Negotiable)

| Section | Owning Agent |
| --- | --- |
| market_data | Market Data Agent |
| market_structure | Market Structure Agent |
- Agents may **read** any section
- Agents may **write only** to their owned section
- Violations are architecture bugs

## Analysis Object

Store any information you consider relevant in the analysis object. Add it to the JSON schem and edit it however you see fit, only if it is beneficial to the trading process and aligns better with the trading course concepts and ideas

### 1. Analysis Object (Critical)

- There must be **exactly one analysis object per symbol**
- All symbol-related data MUST live inside this object
- The object MUST conform to `analysis.json`
- This object is:
    - Read by all agents
    - Written by multiple agents
    - Updated incrementally (never overwritten wholesale)

### Strategy Isolation Architecture

**Sandboxing**: Each strategy agent runs in isolated environment:

- Separate memory space
- CPU/memory limits (cgroups)
- Restricted tool access (can't execute trades)
- Timeout constraints (must respond within 5s)

**Versioning**:

```
strategy://trend-following/v2.3.1
strategy://mean-reversion/v1.8.0
strategy://ml-gradient-boost/v3.1.0

```

Each version is immutable. New versions are deployed alongside old ones, allowing A/B testing.

### Deployment Process

**Adding New Strategy**:

1. Strategy developed and backtested offline
2. Registered in Strategy Registry with metadata
3. Deployed in **shadow mode** (generates signals, doesn't trade)
4. Signals compared to existing strategies for 1-2 weeks
5. Performance metrics validated
6. Gradually allocated capital (1% → 5% → 10%)
7. Full deployment if metrics acceptable

**No Downtime**: New strategies are hot-swappable via event bus subscription updates.

### Conflict Resolution

**Scenario 1: Opposing Signals**

- Trend agent says BUY (confidence 0.8)
- Mean reversion says SELL (confidence 0.6)

**Resolution**:

- Calculate net signal: (+0.8 - 0.6) × weights = weak buy
- Reduce confidence due to disagreement
- If disagreement is strong (negative correlation > 0.7), no trade

**Scenario 2: Same Direction, Different Magnitudes**

- Agent A: BUY, confidence 0.9
- Agent B: BUY, confidence 0.3

**Resolution**: Use confidence-weighted average

**Scenario 3: Strategy Temporarily Disabled**

- If strategy hit its drawdown limit
- Remove from ensemble until reset or recovery

### Ensemble Mechanisms

**Simple Voting**: Each strategy gets one vote, majority wins

**Confidence Weighting**: Weight votes by confidence scores

**Historical Performance Weighting**: Weight by Sharpe ratio over trailing 30 days

**Regime-Adaptive Weighting**: Weight by performance in current market regime

**Kelly-Based Allocation**: Capital allocated proportional to edge and bankroll fraction

**Default**: Confidence-weighted with regime adaptation

# Priority Queue System Documentation

## Overview

The AiTrader event bus implements a priority queue system to ensure critical operations execute before less important ones. This guarantees that emergency stops, trade signals, and position management always take precedence over routine data fetching or logging.

## Priority Levels

The system defines 4 priority levels (lower values = higher priority):

### CRITICAL (Priority 0)

**Use for**: Emergency operations that require immediate execution

- Emergency stops
- Position closures
- System shutdown commands

### HIGH (Priority 1)

**Use for**: Trading operations and risk management

- Trade signals (STRATEGY_SIGNAL, SIGNAL)
- Order requests (ORDER_REQUEST)
- Order fills (ORDER_FILLED)
- Anomaly alerts (ANOMALY_ALERT)

### NORMAL (Priority 2)

**Use for**: Regular operations and data processing

- Market data events (MARKET_DATA)
- Market data requests (MARKET_DATA_REQUEST)
- Regime changes (REGIME_CHANGE)

### LOW (Priority 3)

**Use for**: Non-critical background operations

- Error logging (ERROR)
- System status updates (SYSTEM_STATUS)

## Event Processing Order

Events are processed in the following order:

1. **By Priority**: CRITICAL → HIGH → NORMAL → LOW
2. **Within Same Priority**: FIFO (First In, First Out)

This ensures that if an emergency stop is triggered while market data is being processed, the emergency stop will execute immediately, even if there are pending market data events.

## Architecture

### Event Wrapper

Each event is wrapped in an `Event` object that contains:

- `event_type`: The type of event
- `data`: Event payload
- `priority`: EventPriority enum value
- `timestamp`: Creation timestamp
- `agent_name`: Name of the agent that created the event

### Priority Queue

The `EventBus` uses `asyncio.PriorityQueue` to maintain event ordering. Events are:

1. Added to the queue with their priority
2. Automatically sorted by priority
3. Processed by a background task that dispatches to subscribers

### Event History

For debugging and UI display, the event bus maintains:

- **Global history**: Last 1000 events across all agents
- **Per-agent history**: Last 100 events per agent

## Usage Examples

### Default Priority (Automatic)

Most events use the default priority mapping:

```python
# Automatically assigned NORMAL priority
await event_bus.publish(EventType.MARKET_DATA, {
    "symbol": "BTC-USDT",
    "price": 50000
})

```

### Custom Priority Override

Override priority for special cases:

```python
from app.core.event_bus import EventPriority

# Force CRITICAL priority
await event_bus.publish(
    EventType.ORDER_REQUEST,
    {"symbol": "BTC-USDT", "side": "SELL"},
    priority=EventPriority.CRITICAL
)

```

## Performance Considerations

1. **Queue Processing**: Events are processed asynchronously in batches
2. **Subscriber Errors**: Individual subscriber errors don't block other subscribers
3. **Memory**: Event history is circular (fixed size) to prevent memory leaks
4. **Throughput**: Priority queue adds minimal overhead (~microseconds per event)

## Best Practices

1. **Use Default Priorities**: Let the system assign priorities unless you have a specific need
2. **Don't Abuse CRITICAL**: Reserve for truly emergency situations
3. **Group Related Events**: Events published together with the same priority maintain FIFO order
4. **Monitor Event History**: Use the agent events API to debug event flow issues

## LLM Integration Constraints

- LLMs may be used **only if needed**
- Ollama is available locally on the default port
- Use **LangChain** if you integrate LLM calls
- Do NOT assume external APIs or cloud LLMs

## 2️⃣ AGENT HIERARCHY (EXPLICIT)

Define **every major agent**, including:

- Purpose
- Inputs
- Outputs
- Memory scope (stateless, short-term, long-term)
- Tools it can call
- Permissions & limits

Include, at minimum:

- Orchestrator / Governor Agent
- Market Data Agents
- Feature Engineering Agents
- Strategy Agents (multiple, competing)
- Risk Management Agents
- Trade Construction Agents
- Execution Agents
- Monitoring & QA Agents
- Verification / Consensus Agents
- UI / Reporting Agents
- HITL Control Agent

## Agents

I would like to implement the following agents to be able to handle different tasks. I have given as much information as I can on each one. Figure out what is required for each Agent based on documentation. Apply all the information to the system and use LLMs anywhere where it is required or will work best.

1. Cycles Strategy Agent
2. EMA Strategy Agent
3. Value Areas Agent
4. Regime Change Agent
5. Market Structure Agent
6. Support and Resistance Agent
7. Anchored VWAP Agent
8. Fibonacci Retracement Agent
9. Execution Agent
10. SFP Strategy Agent

Improve documentation for all these agents to reflect what is implemented and what is mentioned in the trading notes.

Modify the analysis object if required to store more or better information.

Note that agents must perform their initial analysis and then continue to update the analysis object as new data comes in.
Also, wherever possible, analysis entries should be stored in the analysis object for agents to use in their analysis and store their conclusions for other agents to use. The JSON schema already defines many of these entries and where they are located.

![mermaid_chart.png](mermaid_chart.png)

### Governor Agent (L0 - System Level)

**Purpose**: Top-level orchestrator with system-wide authority

**Inputs**:

- System health metrics
- Capital availability
- Active positions
- Risk limit states
- External triggers (HITL commands)

**Outputs**:

- Start/stop commands to all agents
- Capital allocation budgets
- Global risk limits
- Emergency circuit breaker triggers

**Memory**: Long-term (full system history)

**Tools**:

- `check_system_health()`
- `allocate_capital(strategy_id, amount)`
- `set_global_limit(limit_type, value)`
- `trigger_circuit_breaker(reason)`
- `approve_trade(trade_id)` (HITL mode)

**Permissions**: Full system control

**Constraints**:

- Cannot execute trades directly
- Cannot modify historical data
- Must log all commands to immutable audit log

The governor creates Market Data agents.

The first thing that should happen for each symbol is a check to see whether the symbol is an actual cryptocurrency coin or token or if it's some weird derivative like BTCUP-USDT or 1000PEPE-USDT or something similar.

To do so, the Governor Agent should call the Sanity Agent with the symbol as a parameter.

---

## 2. Orchestration: The Governor

The **Governor Agent** (`app/agents/governor_agent.py`) is the conductor. It:

1. **Instantiates** all other agents (Market, Strategy, Aggregator, Risk, Execution, Audit, Anomaly).
2. **Starts** each agent's custom `run_loop`.
3. **Monitors** for failures.

The system is triggered via `app/main.py`, which is a FastAPI server. When you hit the `/start` endpoint, the Governor begins the cycle.

## 2. Sanity Agent

The Sanity Agent should return a boolean value indicating whether the symbol is a valid cryptocurrency coin or token or not. To do so it should simply ask the LLM via langchain if the symbol is a valid cryptocurrency coin or token or not. This question should be wrapped in a prompt with maxed out prompt engineering and best practices to ensure a correct answer every time. The LLM available is running locally on ollama. It is phi3:mini, and it is available on my windows laptop via ollama in the usual port.

Only if the Sanity Agent returns true should the analysis object for that symbol be created. If it returns false, the symbol should be skipped.

## 3. Market Data Agent

The market data agents fetch market data for each of the timeframes: 1w, 1d, 4h, 1h, 30m, 15m and 5m.

The market data agent then calculates indicators on this dataframe and stores them in columns in the dataframe. The indicators are already mostly calculated.

the market data agent then adds the market data along with its indicators to an object that will store ALL the information about a certain symbol. This object is referred to in the documentation as the "analysis" object, but I suggest you come up with the best name possible for it. The schema for this object is defined in app/models/analysis.json, and it contains plenty of data and information. Essentially it will hold all the information associated with a certain symbol, and it will be used ultimately to make decisions on trading.

Each agent will have access to this analysis object, and read and write values to it for different purposes. Specific agents will be tasked with populating certain pieces of information for this object in order to create a complete picture of the symbol.

the market data agent will populate the analysis object with the following fields:

- market_data.1w = pandas DataFrame with fetched data for 1w timeframe and all the indicators calculated on it.
- market_data.1d = pandas DataFrame with fetched data for 1d timeframe and all the indicators calculated on it.
- market_data.4h = pandas DataFrame with fetched data for 4h timeframe and all the indicators calculated on it.
- market_data.1h = pandas DataFrame with fetched data for 1h timeframe and all the indicators calculated on it.
- market_data.30m = pandas DataFrame with fetched data for 30m timeframe and all the indicators calculated on it.
- market_data.15m = pandas DataFrame with fetched data for 15m timeframe and all the indicators calculated on it.
- market_data.5m = pandas DataFrame with fetched data for 5m timeframe and all the indicators calculated on it.
- symbol = symbol name (e.g. BTC-USDT)
- date_created = date and time the analysis object was created, as a unix timestamp
- analysis_state = "IN_PROGRESS"
- market_structure.adx: TRENDING or NEUTRAL based on whether the latest adx value is greater or equal to 23.
- market_structure.last_updated = date and time the market structure was last updated (current time), as a unix timestamp

## 📈 Market Data Agent

### Current State

- Already mostly implemented
- Produces indicator-enriched OHLCV data
- Maintains one DataFrame per timeframe

### Required Changes

You must update it to:

1. **Write exclusively to the analysis object**
2. Populate:
    
    ```
    analysis.market_data[timeframe]
    
    ```
    
3. Store:
    - One DataFrame per timeframe
    - All existing indicator columns (unchanged)
4. **Publish an event** whenever market data is updated

### Event Requirements

- Event must include:
    - symbol
    - timeframe(s) updated
    - version or timestamp
- Evaluate whether the **existing event publishing mechanism**:
    - Is sufficient
    - Needs modification for multi-agent coordination

### Market Data Agent Cluster (L1 - Data Layer)

### Market Data Ingestion Agent

**Purpose**: Fetch and normalize market data from multiple sources

**Inputs**: Exchange API connections, websocket feeds

**Outputs**: Normalized OHLCV, orderbook snapshots, trades stream

**Memory**: Stateless (caches recent data in Redis)

**Tools**:

- `fetch_ohlcv(exchange, symbol, timeframe)`
- `fetch_orderbook(exchange, symbol, depth)`
- `fetch_trades(exchange, symbol, since)`
- `fetch_funding_rates(exchange, symbol)`

**Permissions**: Read-only to exchanges


### Alternative Data Agent  

**Purpose**: Aggregate non-price signals

**Inputs**: Social sentiment APIs, news feeds, GitHub activity

**Outputs**: Sentiment scores, narrative trends, development activity

**Tools**:

- `get_twitter_sentiment(symbol)`
- `get_news_sentiment(symbol, timeframe)`
- `get_github_commits(project, timeframe)`

## Task 1: Market Data Fetching with Retry Logic

### Issue

Many timeframes weren't being fetched, resulting in null values for symbols with certain timeframes. The Market Data Agent would fail silently without retrying.

### Solution Implemented

Added comprehensive retry mechanism to `MarketDataAgent`:

####Files Modified

- `app/agents/market_data_agent.py`

### Key Changes

1. **Retry Configuration** (lines 39-42):
    
    ```python
    self.max_retries = 3
    self.retry_delays = [1, 2, 5]  # Exponential backoff
    self.retry_tracker = {}  # Track retries per (symbol, timeframe)
    
    ```
    
2. **Enhanced `fetch_and_publish` Method**:
    - Tracks retry attempts per unique symbol-timeframe combination
    - Implements exponential backoff (1s → 2s → 5s)
    - Resets counter on successful fetch
    - Logs detailed attempt information
    - Raises ValueError for empty data instead of silently returning
3. **Simplified `run_loop`**:
    - Removed redundant error handling
    - All retry logic centralized in `fetch_and_publish`

### Result

- All timeframes now fetch reliably
- Transient network errors automatically recovered
- No more null timeframe data
- Better observability through enhanced logging

### Market Data Agent Cluster (L1 - Data Layer)

### Market Data Ingestion Agent

**Purpose**: Fetch and normalize market data from multiple sources

**Inputs**: Exchange API connections, websocket feeds

**Outputs**: Normalized OHLCV, orderbook snapshots, trades stream

**Memory**: Stateless (caches recent data in Redis)

**Tools**:

- `fetch_ohlcv(exchange, symbol, timeframe)`
- `fetch_orderbook(exchange, symbol, depth)`
- `fetch_trades(exchange, symbol, since)`
- `fetch_funding_rates(exchange, symbol)`

**Permissions**: Read-only to exchanges

### Alternative Data Agent

**Purpose**: Aggregate non-price signals

**Inputs**: Social sentiment APIs, news feeds, GitHub activity

**Outputs**: Sentiment scores, narrative trends, development activity

**Tools**:

- `get_twitter_sentiment(symbol)`
- `get_news_sentiment(symbol, timeframe)`
- `get_github_commits(project, timeframe)`

### Feature Engineering Agents (L2 - Transform Layer)

### Market Structure Agent

- Apart from what is already mentioned, also check Weis Waves volume (for each candlestick type) to determine market structure. Add this to the JSON schema somewhere. Volume increasing on the buy phases and decreasing on the sell phases is bullish, and vice versa. Figure out the best way to implement this based on notes and trading course.
- Observers highs and lows, heikin ashi, relative candle phases, observations on volume, obv divergences on 15m timeframe, cycles, value areas moving up or down, adx strength and directionality indicators to understand market structure.
- Provides solid analysis on market structure and adds it to the analysis object.
- Choose wisely what should be done by the Market Structure Agent and what should be done by the Market Regime Agent.

### 📐 Market Structure Agent

### Behavior

- Subscribes to **market data update events**
- Reacts per symbol + timeframe
- Reads market data from the analysis object
- Computes and updates **only** its owned section

### Must Update the Following Fields

Inside:

```
analysis.market_structure[timeframe]

```

Set and maintain:

- `highs`
- `lows`
- `pivot_points`
- `emas`

⚠️ Do NOT duplicate market data
⚠️ Do NOT recompute indicators owned by Market Data Agent

## Key level Agent

Once all timeframes have been fetched, the Key Levels Agent is tasked with populating the analysis object with the following fields:

- key_levels.daily_open: today's open price
- key_levels.weekly_open: this week's open price
- key_levels.monthly_open: this month's open price
- key_levels.previous_day_high: yesterday's highest price
- key_levels.previous_day_low: yesterday's lowest price
- key_levels.previous_month_high: last month's highest price
- key_levels.previous_month_low: last month's lowest price
- key_levels.last_updated = date and time the key levels were last updated (current time), as a unix timestamp

### Regime Detection Agent

**Purpose**: Classify current market state

**Inputs**: Price data, volatility, volumes

**Outputs**: Regime classification (trending/ranging/volatile)

**Memory**: Medium-term (regime history)

**Tools**:

- `detect_regime(symbol, timeframe)`
- `calculate_volatility_regime(symbol, lookback)`

**Logic**: Uses HMM, clustering, or rule-based classification

### Volume Agent

This agent might not be necessary since its tasks might be better handled by other agents that already exist.

- Understands volume tools available: OBV, Weis Waves Volume, Relative Candles Weis Waves Volume, Heikin Ashi Weis Waves Volume, Session Volume, Fixed Ranege VOlume Profiles (Value areas), VPVR, POCs, VALs, VAHs.
- Analyses each tool individually and collectively on multiple timeframes. Then performs an overall analysis and conclusion on the information gathered.
- Defines volume patterns and conclusions, key levels such as naked POCs, current trend strength, and previous value areas of interest.

### Value Areas (Volume) Agent

- check VPVR for potential ideas as to where there are value areas.
- Compute multiple window linear regressions to determine value areas. local ranges form where lineara regression slopes are close to 0, and window sizes help indicate the size of the value area. It is not an exact science but use this to determine possible value areas.
- For each value area, check whether it makes sense as a local range.
- Use all the value area ideas to determine what the final best value areas are that make sense to use.
- define start_date and end_date for each value area.
- Compute value area values: vah, val, poc, resistance (range high), support (range low), etc. Note that range high and range low are defined by the wicks of the candles, not the bodies of the candles. This is different to the rest of support and resistance levels in the system.
- Consider global and local ranges. Value areas might overlap, making some value areas contained or part of a much larger value area. Select the best most sensible value areas.
- check key levels for value area related prices for ideas of localised ranges. Maybe the value area prices align with the key levels.
- The larger the value area, the stronger the support and resistance levels are, as well as POC and naked POCs. Somehow take this into consideration wherever relevant in analysis.
- Determine start and finish candles. The start and finish candles should be the first and last after/before the candle that moved price INTO the value area, meaning the candle that is partly inside the value area and partly out should NOT be included.
- Find current value area or one in the past it is re-entering.
- Find last value area it left. There is likely to be a naked POC here.
- Determine naked POCs.

### Anchored VWAP Agent

- Find beginning of last major move.
- Calculate anchored VWAP from the beginning of the last major move.
- Use Gaussian Processes to project the anchored VWAP into the future.
- Store anchored VWAPS in the analysis object, in their own field.
- Store the projection into the future
- Write the last_updated field for the anchored VWAPs in order to clearly know what information is historical and what information is a projection.
- Define a sensible prior for the anchored VWAPs Gaussian Process. Consider studying the notes or real examples to define a good prior.
- Anchored VWAP is only added if it is considered to be relevant. If the anchored VWAP idea isn't good enough, ignore it completely.
- Determines whether the anchoored VWAP is being respected, and if it is valid as a dynamic support or resistance level.

### Support and Resistance Agent

- SUPER IMPORTANT: Levels are defined by the body of the candles, not the wicks.
- Check closest support and closest resistance indicators in market data for ideas. These are not calculated in the best way but can give ideas when used in confluence with other information.
- Read the different williams fractals for ideas of where support and resistance levels might be.
- Assert levels are on the body of the candle and not the wick when adding them to the analysis object.
- Check the edges of value areas, these are likely to have good support and resistance levels.
- Check well-respected Pivot Points for ideas of where support and resistance levels might be.
- Check naked POCs and POCs for ideas of where support and resistance levels might be. Again, confluence will be key to determining which are the best levels
- Check all notes for more information on support and resistance levels.
- Consider alignment with anchored VWAPs for high probability levels.

### Fibonacci Retracement

- Observe anchored VWAPS dates to find first point in fibonacci retracement pull (first point matches with the start of an anchored VWAP).
- Define whether to pull up or down based on this information.
- Find max/min of the move to find second point in fibonacci retracement pull.
- Calculate only the 66.6% and 70.6% retracement levels. All other levels are completely ignored.
- These 2 fib levels for what is known as the CC channel, and together they define a strong area to consider for pullbacks.
- Analysis: Do these fib levels align with any other major support or resistance levels? Do they align with any key levels? Do they align with any value area POCs? Do they align with any VWAPs?

### Strategy Agent Pool (L3 - Signal Generation)

Each strategy is an independent agent with identical interface:

**Standard Interface**:

- Input: Feature vectors, current positions, capital available
- Output: Signal (buy/sell/hold), confidence (0-1), rationale (text)

### Strategy Agent Details

- There is one agent created for each strategy.
- Trader Agent keep a tab on what strategies to apply when and on what coins. OR maybe there is another agent that handles this.
- Have clearly defined rules for a trade setup
- Process all necessary indicators.
- Can use information from analysis object and from other agents (through this object).
- Output trade setups/ideas. These are also stored in the analysis object.
- Can tell other Agents how long to wait if a certain amount of waiting is required before checking again.

After fully analysing a symbol, trades should be executed or waiting times for in place before checking again. Waiting times should be conservative enough to not mistakenly make the system miss opportunities. It is better to overcheck than to miss opportunities. Once waiting times are in place, market data agent doesn't need to be continuously checking for new candles, and can maybe move on to another symbol if the system is idle.

- [ ]  The initial limit of 10 symbols can be increased to 30 symbols.

**STRATEGY MODULARITY**

Explain how:

- Strategies are isolated, versioned, and sandboxed
- New strategies can be added without system downtime
- Conflicting strategy signals are resolved
- Ensemble / voting / confidence-weighted mechanisms work

### 20Bounce Strategy Agent

- Defined in docs/strategies/Bounce.md, add as another strategy similar to EMA Strategy.
- Create an Agent around this strategy that works on similar concepts to the EMA Strategy Agent.

### SFP Strategy Agent

- Find next level above where an SFP would be great to short from.
- Find next level below where an SFP would be great to long from.
- Look for levels with high confluence to find highest probability trade setups.
- Add trade setup to analysis object if a good SFP trade setup is found.
- Write why this is a good level for SFP setup.
- Check for naked POCs. These always have a high probability of being a good SFP level.
- Check higher timeframe support and resistance levels for ideas of where SFP levels might be, look for confluence.
- Check current value area high and low, and current range high and low for ideas of where SFP levels might be, look for confluence.
- Check POCs for ideas of where SFP levels might be, look for confluence.

### EMA Strategy Agent

- [ ]  Look at EMAs for crossovers of the 9, 25 and 55 perios EMAs (specific EMA periods might differ slightly, use whichever are available in the market data)
- [ ]  Look at EMAs fanning out, indicating the beginning of a strong move.
- [ ]  Look at market structure, as well as market regime (bullish or bearish) to determine if the coin is in a strong move or beginning of a strong move.
- [ ]  Populate the analysis object ema_strategy.analysis field with an entry containing a final conclusion analysis on the coin based on the above criteria.
- [ ]  Apply max prompt engineering to the strategy agent to perform this analysis.
- [ ]  If the analysis is giving a buy or sell signal, add a trade setup entry to the analysis object with all the required parameters. Ensure the trade setup is valid and makes sense.

### Cycles Strategy Agent

- [ ]  Look at market structure, as well as market regime (bullish or bearish) to determine if the coin is in a strong move or beginning of a strong move.
- [ ]  Populate the analysis object cycles_strategy.analysis field with an entry containing a final conclusion analysis on the coin based on the above criteria.
- [ ]  Apply max prompt engineering to the strategy agent to perform this analysis.
- [ ]  If the analysis is giving a buy or sell signal, add a trade setup entry to the analysis object with all the required parameters. Ensure the trade setup is valid and makes sense.

Here is more information on the cycles strategy:

- Compare Heikin Ashi candles and phases with Relative Candles Phases to determine Cycles.
- Check for trending cycles.
- Check if the entry trigger activated.
- Define direction: UP/DOWN/NEUTRAL
- Observe higher timeframe alignmet for context and confidence
- Check alignment with any levels.
- Choose if SL should be usual or below/above a certain level nearby
- Don't choose safer SL if it's more than 1x ATR away and timeframe is larger than 30m. If larger or equal to 30minute timeframe use less safe SL.
- Write an entry for the cycles_strategy field in the analysis object.

### Analyst Agent

- Understands how to use all information in analysis object to reach conclusions and high-probability trade setups of the highest quality.
- Understands what tools are availablem and when to use each one.
- Looks for confluence.
- Explores multiple timeframes and tools to find high-probability setups with high confluence.
- Performs a top-down multi-timeframe approach to analysis.
- It starts on the higher timeframes and works its way down.

### Signal Aggregation Agent (L4 - Consensus Layer)

**Purpose**: Combine multiple strategy signals into actionable recommendations

**Inputs**: All strategy agent signals for a given asset

**Outputs**: Aggregated signal, aggregated confidence, contributing strategies

**Memory**: Short-term (recent signals for comparison)

**Methods**:

**Voting**: Simple majority with confidence weighting

```
final_signal = sign(Σ(strategy_signal_i × confidence_i))
final_confidence = Σ(confidence_i × agreement_i) / Σ(confidence_i)

```

**Kelly-Style Weighting**: Weight by historical win rate and edge

```
weight_i = (win_rate_i × avg_win_i - (1-win_rate_i) × avg_loss_i) / avg_win_i

```

**Regime-Adaptive**: Weight strategies by performance in current regime

**Conflict Resolution**:

- If strategies disagree strongly (negative correlation), reduce confidence
- If one strategy has very high confidence, it can override weak consensus
- Never aggregate if risk agent has flagged concerns

**Tools**:

- `aggregate_signals(signals_list, method='weighted_vote')`
- `calculate_agreement_score(signals_list)`
- `resolve_conflicts(signals_list, current_regime)`

### Anomaly Detection Agent

**Purpose**: Detect unusual behavior in the system

**Inputs**: All agent behaviors, historical baselines

**Outputs**: Anomaly alerts, severity scores

**Detects**:

- Strategy producing unusually frequent signals
- Strategy confidence scores drifting from baseline
- Execution slippage exceeding norms
- Data quality degradation
- Agent response time anomalies

**Tools**:

- `detect_statistical_anomaly(metric, baseline)`
- `check_behavioral_drift(agent_id, metric, window)`

### Risk Management Agents (L5 - Control Layer)

### Verification & QA Agents (L6 - Quality Layer)

### Signal Verification Agent

**Purpose**: Validate strategy outputs before they reach risk management

**Checks**:

- Signal is structurally valid (correct format)
- Confidence score is in valid range [0,1]
- Rationale is non-empty and coherent
- No null/NaN values in critical fields
- Asset exists and is tradeable

**Tools**:

- `validate_signal_structure(signal)`
- `check_data_quality(signal)`
- `verify_asset_tradeable(symbol)`

### Position Risk Agent

**Purpose**: Evaluate risk of individual proposed trades

**Inputs**: Proposed trade, current volatility, historical drawdowns

**Outputs**: Approved/rejected, modified size if approved

**Logic**:

- Checks position size vs account (max 2-5% per trade)
- Validates stop-loss placement (max 1-2% account risk)
- Adjusts size based on volatility (lower size in high vol)

**Tools**:

- `calculate_position_size(entry, stop, risk_pct)`
- `validate_risk_reward(entry, stop, target)`

### Portfolio Risk Agent

**Purpose**: Ensure portfolio-level constraints

**Inputs**: All current positions, proposed new trade

**Outputs**: Portfolio heat score, approved/rejected

**Checks**:

- Total portfolio heat < 10% (sum of all position risks)
- Correlation exposure (avoid too many correlated positions)
- Sector concentration (max % in any sector)
- Aggregate leverage limits

**Tools**:

- `calculate_portfolio_heat(positions)`
- `calculate_correlation_exposure(positions, new_trade)`
- `check_concentration_limits(positions, new_trade)`

### Drawdown Monitor Agent

**Purpose**: Halt trading if drawdown exceeds limits

**Inputs**: Real-time P&L, equity curve

**Outputs**: Trading allowed/halted, recovery requirements

**Logic**:

- Daily drawdown limit: 5%
- Weekly drawdown limit: 10%
- Monthly drawdown limit: 15%
- Max drawdown limit: 25% (requires manual reset)

**Actions**:

- Reduce position sizes as drawdown approaches limits
- Halt new positions if daily limit hit
- Close all positions if max limit hit (emergency)

### Volatility Regime Agent

**Purpose**: Adjust risk based on market volatility

**Inputs**: Realized volatility, implied volatility, volatility of volatility

**Outputs**: Risk multiplier (0.5x - 1.5x of normal sizing)

**Logic**:

- In low vol: increase position sizes moderately
- In high vol: decrease position sizes significantly
- In volatile vol (instability): go to minimum sizing

### Risk Agent

Compares trade proposals, current state of portfolio (overall risk, margin available, directional bias, portfolio composition), confidence/confluence metrics on trade setups, and anomaly detection information to determine:

- whether to take the trade proposed
- how much risk to put into the trade (within certain constraints)
- Ensure good SL and TP prices (valid and reasonable).
- Ensures trade setups have at least a 1:1 risk-reward-ration, Anything lower will be ignored. The higher the risk-reward ratio, the better.
- outputs clear trade signals ready to be directly executed

## **5️⃣ RISK MANAGEMENT (MULTI-LAYER)**

Design risk controls for:

- Individual trade
- Asset-level exposure
- Strategy-level exposure
- Portfolio-level drawdown
- Volatility regime shifts
- Black swan / kill-switch logic

## 5️⃣ RISK MANAGEMENT (MULTI-LAYER)

### Layer 1: Individual Trade Risk

**Enforced by**: Position Risk Agent

**Rules**:

- Max risk per trade: 1-2% of account
- Position size: `(Account × Risk%) / (Entry - Stop)`
- Stop-loss: Mandatory on all positions
- Risk/reward ratio: Minimum 1.5:1 preferred

**Example**:

```
Account: $100,000
Risk per trade: 1% = $1,000
Entry: $50,000 (BTC)
Stop: $48,000 (4% below entry)
Position size: $1,000 / $2,000 = 0.5 BTC = $25,000 position
Position % of account: 25% (acceptable if stop is tight)

```

### Layer 2: Asset-Level Exposure

**Enforced by**: Portfolio Risk Agent

**Rules**:

- Max positions per asset: 2 (one per strategy)
- Max exposure per asset: 25% of portfolio
- Correlated assets counted together (BTC/ETH correlation)

### Layer 3: Strategy-Level Exposure

**Enforced by**: Governor Agent

**Rules**:

- Each strategy allocated capital budget
- Strategy can't exceed its allocation
- Budget adjusted based on performance:
    - Good performance: Increase allocation
    - Drawdown: Decrease allocation
    - Severe drawdown: Halt strategy

**Example Allocations**:

```
Total Capital: $1,000,000

Strategy Allocations:
- Trend Following: $300,000 (30%)
- Mean Reversion: $200,000 (20%)
- Breakout: $200,000 (20%)
- ML Strategy: $150,000 (15%)
- Arbitrage: $150,000 (15%)

```

### Layer 4: Portfolio-Level Drawdown

**Enforced by**: Drawdown Monitor Agent

**Limits**:

- Daily drawdown: 5% (warning at 4%, halt at 5%)
- Weekly drawdown: 10%
- Monthly drawdown: 15%
- Max drawdown: 25% (emergency shutdown)

**Actions**:

- At 50% of limit: Reduce all position sizes by 25%
- At 75% of limit: Reduce all position sizes by 50%, halt aggressive strategies
- At 100% of limit: No new positions
- At max drawdown: Close all positions, manual intervention required

### Layer 5: Volatility Regime

**Enforced by**: Volatility Regime Agent

**Adjustments**:

```
Current Vol / Historical Vol Ratio:
< 0.5 (very low vol): Position size × 1.2
0.5 - 1.5 (normal vol): Position size × 1.0
1.5 - 2.5 (high vol): Position size × 0.7
2.5 - 4.0 (extreme vol): Position size × 0.4
> 4.0 (crisis): Position size × 0.2, halt all strategies

```

### Layer 6: Black Swan / Kill Switch

**Enforced by**: Governor Agent + Anomaly Detection

**Triggers**:

- Market circuit breakers (exchange halts)
- Flash crash detection (>15% move in 1 minute)
- Data feed failure (no updates for 5+ minutes)
- Execution system failure
- Multiple strategies hitting stops simultaneously
- Human emergency trigger (HITL)

**Actions**:

1. Immediately halt all new order placement
2. Cancel all pending limit orders
3. Close positions at market (if required)
4. Send emergency alerts to operators
5. Enter safe mode (read-only)
6. Require manual reset with authorization

**Recovery Process**:

1. Investigate root cause
2. Fix underlying issue
3. Validate data integrity
4. Run system health checks
5. Get operator approval
6. Resume in reduced-risk mode
7. Gradually return to normal operation

### Trader Agent (maybe this role belongs to Analyst, Aggregator, Risk or Execution Agent)

- Executes trade idea form Analyst Agent.
- Receives analysis object from Analyst Agent with trade proposals.
- Tracks relevant information for each trade and waits for the right moment to take action.
- Monitors all relevant information to determine whether the trade setup is playing out as expected. For example the trade setup might anticipate a bounce of a key level which does not end up happening, thus invalidating the trade idea.
- Cancels trade setups that are no longer valid.
- Assesses amount of confluence and confidence in a trade.
- Stores list of waiting times for coins and strategies to know when to check price next. Maybe a certain strategy requires at least a certain amount of candles before it is worth checking again, meaning it should wait for more candles to be added.

### Execution Agent

- Places trades, noquestions asked.
- In charge of execution, not analysis.
- Sets/checks leverage before placing orders.
- Places SL and TP orders.
- Confirms all orders have been placed.
- For demo, SL and TP orders are handled by the demo agent.

Note that it may be required to implement a live_engine apart from the demo_engine to handle live trading on BingX exchange.

### Execution Agent (L8 - Order Placement)

**Purpose**: Interact with exchange APIs to place orders

**Inputs**: Order specification from Trade Construction

**Outputs**: Order confirmation, fill reports

**Memory**: Short-term (active orders cache)

**Execution Logic**:

**Pre-Flight Checks**:

- Verify sufficient balance
- Check exchange API status
- Validate order parameters with exchange rules

**Smart Order Routing**:

- Split large orders (avoid market impact)
- Use TWAP/VWAP algorithms for large trades
- Retry logic with exponential backoff

**Post-Trade Actions**:

- Log executed prices (for slippage analysis)
- Set stop-loss and take-profit orders
- Emit execution event for monitoring

**Safety Features**:

- Idempotency (don't double-submit on retry)
- Rollback on partial fills if unacceptable
- Rate limiting (respect exchange limits)

**Tools**:

- `create_order(exchange, symbol, side, type, amount, price)`
- `cancel_order(exchange, order_id)`
- `get_order_status(exchange, order_id)`
- `calculate_actual_slippage(expected_price, fill_price)`

**Permissions**: Write access to exchange APIs (with API key restrictions)

### Paper Trading Layer

**Parallel Universe**:

- All signals are executed in paper trading simultaneously
- Uses same risk management and execution logic
- Tracks hypothetical portfolio

**Purpose**:

- Validate execution logic
- Detect issues before they affect real capital
- Stress test new strategies

### Execution APIs

**Exchange API Wrappers**:

- Unified interface via CCXT
- Rate limiting (respects exchange limits)
- Error handling and retries
- Order status polling

**Tools Available to Execution Agent**:

```markdown
# Order management
create_order(exchange, symbol, side, type, amount, price=None)
cancel_order(exchange, order_id)
fetch_order(exchange, order_id)
fetch_open_orders(exchange, symbol=None)
fetch_balance(exchange)

# Market data (for slippage calculation)
fetch_ticker(exchange, symbol)
fetch_order_book(exchange, symbol, limit=20)

# Advanced execution
place_twap_order(exchange, symbol, side, amount, duration_minutes)
place_iceberg_order(exchange, symbol, side, total_amount, visible_amount)

```

### Shadow Trading Agent

**Purpose**: Run paper trading parallel to live trades

**Inputs**: All signals that reach execution

**Outputs**: Paper trading results for comparison

**Logic**:

- Executes all approved trades in paper mode
- Tracks if paper results diverge from live results
- Alerts if divergence suggests execution issues

### Trade Construction Agent (L7 - Order Assembly) <- this is what execution agent does

**Purpose**: Convert approved signals into executable orders

**Inputs**: Approved signal, risk parameters, market conditions

**Outputs**: Detailed order specification

**Constructs**:

**Entry Order**:

- Order type (limit/market/stop-limit)
- Price (if limit order)
- Size (from risk calculation)
- Timeframe validity (GTC/IOC/FOK)

**Stop Loss**:

- Stop price (from risk calculation)
- Trailing stop parameters (if applicable)

**Take Profit**:

- Target levels (multiple levels possible)
- Partial profit taking schedule

**Order Routing**:

- Exchange selection (best price, lowest fees, sufficient liquidity)
- Split large orders across exchanges if needed

**Tools**:

- `construct_entry_order(signal, size, order_type)`
- `calculate_stop_loss(entry, risk_pct, volatility)`
- `calculate_take_profit(entry, risk_reward_ratio)`
- `select_exchange(symbol, size, priority='best_price')`

### Monitoring & Audit Agents (L9 - Observability Layer)

### Performance Tracking Agent

**Purpose**: Calculate real-time performance metrics

**Outputs**:

- Sharpe ratio, Sortino ratio
- Win rate, profit factor
- Max drawdown, recovery time
- Strategy attribution

**Tools**:

- `calculate_sharpe_ratio(returns, window)`
- `calculate_drawdown_series(equity_curve)`
- `attribute_performance(trades, strategies)`

### Alert Agent

**Purpose**: Notify on critical events

**Triggers**:

- Drawdown exceeds thresholds
- Position stops hit
- System errors
- Anomalies detected
- Large wins/losses

**Channels**: Telegram, email, webhook, PagerDuty

**Tools**:

- `send_alert(channel, message, severity)`

### Audit Log Agent

**Purpose**: Maintain immutable audit trail

**Logs**:

- All agent decisions with timestamps
- All tool calls with parameters
- All state changes
- All trades with full context

**Storage**: PostgreSQL (with append-only constraints)

**Tools**:

- `log_event(agent_id, event_type, data)`
- `query_audit_log(filters, time_range)`

### Logging & Audit Trails

**Structured Logging**: JSON format with standard fields

```json
{
  "timestamp": "2024-01-15T10:30:45Z",
  "agent_id": "trend-following-v2",
  "event_type": "signal_generated",
  "symbol": "BTC/USDT",
  "signal": "buy",
  "confidence": 0.85,
  "rationale": "Strong uptrend on 4h, pullback to support",
  "trade_id": "uuid-1234"
}

```

**Immutable Storage**: Append-only PostgreSQL tables

**Audit Tools**:

- Full replay of any trade decision
- Timeline visualization of agent interactions
- Search and filter by agent, symbol, timeframe
- Export for compliance reporting

---

## Agent Responsibilities (Future-Proofed)

Each agent:

- Knows **which section(s)** it owns
- Knows **which section(s)** it consumes
- Never mutates sections it does not own
- Emits events when it updates its section

## Agent Responsibilities

| Agent | Responsibility | Key Inputs | Key Outputs |
| --- | --- | --- | --- |
| [**Governor**](https://www.notion.so/agents/governor_agent.md) | Orchestrates the system lifecycle and manages agent state. | System Config | Start/Stop Commands |
| [**Market Data**](https://www.notion.so/agents/market_data_agent.md) | Fetches real-time OHLCV data from BingX and persists it. | Exchange API | `MARKET_DATA` |
| [**Value Areas**](https://www.notion.so/agents/value_areas_agent.md) | Calculates VPVR, POC and Value Area levels per timeframe. | `MARKET_DATA` | `VALUE_AREAS_UPDATED` |
| [**Market Structure**](https://www.notion.so/agents/market_structure_agent.md) | Analyzes POC trends and EMA alignments. | `VALUE_AREAS_UPDATED` | `ANALYSIS_UPDATE` |
| [**Regime Detection**](https://www.notion.so/agents/regime_detection_agent.md) | Classifies the market (Trending vs Ranging) to adjust strategy weights. | `ANALYSIS_UPDATE` | `REGIME_CHANGE` |
| [**Aggregator**](https://www.notion.so/agents/aggregator_agent.md) | Buffers signals and finds consensus using regime-adaptive weighting. | `STRATEGY_SIGNAL` | `SIGNAL` (Consensus) |
| [**Risk Agent**](https://www.notion.so/agents/risk_agent.md) | Validates account balance, calculates position sizing, and enforces limits. | `SIGNAL` | `ORDER_REQUEST` |
| [**Execution**](https://www.notion.so/agents/execution_agent.md) | Handles the low-level API interaction to place orders on the exchange. | `ORDER_REQUEST` | `ORDER_FILLED` |
| [**Anomaly Detection**](https://www.notion.so/agents/anomaly_detection_agent.md) | Monitors for flash crashes or excessive system signal frequency. | `MARKET_DATA`, `SIGNAL` | `ANOMALY_ALERT` |
| [**Audit Log**](https://www.notion.so/agents/audit_log_agent.md) | Listens to all bus traffic and creates a permanent record in the database. | All Event Types | Database Records |

| Agent | Primary Responsibility | Inputs | Outputs | Can Veto Trades? |
| --- | --- | --- | --- | --- |
| Governor | System orchestration, capital allocation | System state, HITL commands | Commands to all agents | Yes |
| Market Data Ingestion | Fetch and normalize price data | Exchange APIs | OHLCV, orderbook | No |
| On-Chain Data | Monitor blockchain activity | RPC nodes | Whale movements, DEX volume | No |
| Alternative Data | Social sentiment, news | Twitter, news APIs | Sentiment scores | No |
| Technical Indicator | Calculate price-based features | OHLCV | RSI, MACD, etc. | No |
| Regime Detection | Classify market state | Price, volume, volatility | Regime label | No |
| Factor Agent | Cross-asset factors | Multi-asset data | Momentum, correlation | No |
| Strategy Agents (N) | Generate trading signals | Features, positions | Signal, confidence, rationale | No |
| Signal Aggregation | Combine strategy signals | All strategy signals | Consensus signal | No |
| Position Risk | Individual trade risk validation | Proposed trade, volatility | Approved/rejected/modified size | Yes |
| Portfolio Risk | Portfolio-level constraints | All positions, new trade | Approved/rejected | Yes |
| Drawdown Monitor | Prevent excessive losses | Real-time P&L | Trading allowed/halted | Yes |
| Volatility Regime | Adjust sizing for volatility | Volatility metrics | Risk multiplier | No (modifies) |
| Signal Verification | Validate signal structure | Raw signal | Valid/invalid | Yes |
| Backtesting Comparison | Compare to historical analogs | Trade setup, historical DB | Expected outcome, flags | Yes (can flag) |
| Anomaly Detection | Detect unusual behavior | All agent metrics | Anomaly alerts | Yes (can halt) |
| Shadow Trading | Paper trading verification | All approved signals | Paper P&L comparison | No (monitoring) |
| Trade Construction | Build executable orders | Approved signal, risk params | Order specification | No |
| Execution | Place orders with exchanges | Order specification | Fill confirmation | No (but can fail) |
| Performance Tracking | Calculate performance metrics | Trade history | Sharpe, drawdown, etc. | No |
| Alert | Notify on critical events | System events | Notifications | No |
| Audit Log | Maintain audit trail | All agent actions | Immutable logs | No |
| HITL Control | Interface with human operators | UI commands | Approvals, overrides | Yes (human veto) |
| UI Agent | Serve dashboard data | System state | API responses | No |

## **4️⃣ DATA & TOOLING LAYER**

Specify:

- Market data sources
- Historical data storage
- Feature stores
- Backtesting engines
- Simulation / paper trading layer
- Execution APIs
- Logging & audit trails

Include **explicit examples** of tools/functions each agent would call.

## 4️⃣ DATA & TOOLING LAYER

### Market Data Sources

**Exchanges** (via CCXT library):

- Binance (spot, futures)
- Coinbase Pro
- Kraken
- OKEx
- Bybit

**Websocket Feeds**:

- Real-time trades
- Orderbook updates
- Ticker updates

**Aggregators**:

- CryptoCompare
- CoinGecko
- Messari

### Historical Data Storage

**Timescale DB** (PostgreSQL extension):

- Stores OHLCV at multiple timeframes
- Continuous aggregates for fast queries
- Compression for old data
- Partitioning by symbol and date

**Schema**:

```sql
CREATE TABLE ohlcv (
    time TIMESTAMPTZ NOT NULL,
    symbol TEXT NOT NULL,
    timeframe TEXT NOT NULL,
    open NUMERIC,
    high NUMERIC,
    low NUMERIC,
    close NUMERIC,
    volume NUMERIC,
    PRIMARY KEY (time, symbol, timeframe)
);

```

### Feature Store

**Redis** (real-time features):

- Recent indicator values
- Regime classifications
- Correlation matrices

**TTL**: 1-24 hours depending on feature

**PostgreSQL** (historical features):

- All calculated features with timestamps
- Enables backtesting with correct time-travel

### Logging & Audit Trails

**Structured Logging**: JSON format with standard fields

```json
{
  "timestamp": "2024-01-15T10:30:45Z",
  "agent_id": "trend-following-v2",
  "event_type": "signal_generated",
  "symbol": "BTC/USDT",
  "signal": "buy",
  "confidence": 0.85,
  "rationale": "Strong uptrend on 4h, pullback to support",
  "trade_id": "uuid-1234"
}

```

**Immutable Storage**: Append-only PostgreSQL tables

**Audit Tools**:

- Full replay of any trade decision
- Timeline visualization of agent interactions
- Search and filter by agent, symbol, timeframe
- Export for compliance reporting

## **5️⃣ RISK MANAGEMENT (MULTI-LAYER)**

Design risk controls for:

- Individual trade
- Asset-level exposure
- Strategy-level exposure
- Portfolio-level drawdown
- Volatility regime shifts
- Black swan / kill-switch logic

## 5️⃣ RISK MANAGEMENT (MULTI-LAYER)

### Layer 1: Individual Trade Risk

**Enforced by**: Position Risk Agent

**Rules**:

- Max risk per trade: 1-2% of account
- Position size: `(Account × Risk%) / (Entry - Stop)`
- Stop-loss: Mandatory on all positions
- Risk/reward ratio: Minimum 1.5:1 preferred

**Example**:

```
Account: $100,000
Risk per trade: 1% = $1,000
Entry: $50,000 (BTC)
Stop: $48,000 (4% below entry)
Position size: $1,000 / $2,000 = 0.5 BTC = $25,000 position
Position % of account: 25% (acceptable if stop is tight)

```

### Layer 2: Asset-Level Exposure

**Enforced by**: Portfolio Risk Agent

**Rules**:

- Max positions per asset: 2 (one per strategy)
- Max exposure per asset: 25% of portfolio
- Correlated assets counted together (BTC/ETH correlation)

### Layer 3: Strategy-Level Exposure

**Enforced by**: Governor Agent

**Rules**:

- Each strategy allocated capital budget
- Strategy can't exceed its allocation
- Budget adjusted based on performance:
    - Good performance: Increase allocation
    - Drawdown: Decrease allocation
    - Severe drawdown: Halt strategy

**Example Allocations**:

```
Total Capital: $1,000,000

Strategy Allocations:
- Trend Following: $300,000 (30%)
- Mean Reversion: $200,000 (20%)
- Breakout: $200,000 (20%)
- ML Strategy: $150,000 (15%)
- Arbitrage: $150,000 (15%)

```

### Layer 4: Portfolio-Level Drawdown

**Enforced by**: Drawdown Monitor Agent

**Limits**:

- Daily drawdown: 5% (warning at 4%, halt at 5%)
- Weekly drawdown: 10%
- Monthly drawdown: 15%
- Max drawdown: 25% (emergency shutdown)

**Actions**:

- At 50% of limit: Reduce all position sizes by 25%
- At 75% of limit: Reduce all position sizes by 50%, halt aggressive strategies
- At 100% of limit: No new positions
- At max drawdown: Close all positions, manual intervention required

### Layer 5: Volatility Regime

**Enforced by**: Volatility Regime Agent

**Adjustments**:

```
Current Vol / Historical Vol Ratio:
< 0.5 (very low vol): Position size × 1.2
0.5 - 1.5 (normal vol): Position size × 1.0
1.5 - 2.5 (high vol): Position size × 0.7
2.5 - 4.0 (extreme vol): Position size × 0.4
> 4.0 (crisis): Position size × 0.2, halt all strategies

```

### Layer 6: Black Swan / Kill Switch

**Enforced by**: Governor Agent + Anomaly Detection

**Triggers**:

- Market circuit breakers (exchange halts)
- Flash crash detection (>15% move in 1 minute)
- Data feed failure (no updates for 5+ minutes)
- Execution system failure
- Multiple strategies hitting stops simultaneously
- Human emergency trigger (HITL)

**Actions**:

1. Immediately halt all new order placement
2. Cancel all pending limit orders
3. Close positions at market (if required)
4. Send emergency alerts to operators
5. Enter safe mode (read-only)
6. Require manual reset with authorization

**Recovery Process**:

1. Investigate root cause
2. Fix underlying issue
3. Validate data integrity
4. Run system health checks
5. Get operator approval
6. Resume in reduced-risk mode
7. Gradually return to normal operation

## **6️⃣ QUALITY ASSURANCE & VERIFICATION**

Define agents that:

- Validate signals
- Detect hallucinations or faulty reasoning
- Compare decisions against historical analogs
- Stress-test strategies continuously
- Flag anomalous behaviour

Explain **how no trade reaches execution without verification**.

## 6️⃣ QUALITY ASSURANCE & VERIFICATION

### Verification Pipeline

**Every signal flows through**:

```
Strategy Agent
    ↓
Signal Verification (structural validity)
    ↓
Backtesting Comparison (historical analog check)
    ↓
Signal Aggregation (ensemble consensus)
    ↓
Position Risk Check (individual trade risk)
    ↓
Portfolio Risk Check (aggregate risk)
    ↓
Anomaly Detection (behavioral check)
    ↓
Drawdown Monitor (system health check)
    ↓
Trade Construction (order assembly)
    ↓
Pre-Flight Check (execution validation)
    ↓
Execution

```

**No trade can skip any step**. Each step has veto power.

### Signal Validation (Step 1)

**Checks**:

- Signal format: {symbol, side, confidence, rationale}
- Confidence: 0 ≤ confidence ≤ 1
- Symbol: Valid and tradeable
- Rationale: Non-empty string, min 20 chars
- No nulls/NaNs in critical fields

**Failure**: Signal rejected, logged, alert sent

### Historical Analog Check (Step 2)

**Process**:

1. Extract features from current trade setup
2. Query historical database for similar setups
3. Calculate outcome distribution of similar trades
4. Compare expected outcome to historical baseline

**Example**:

```
Current Trade: BTC/USDT long after pullback in uptrend
Historical Analogs (N=45):
  - Win rate: 62%
  - Avg win: +5.2%
  - Avg loss: -2.1%
  - Expected value: +2.3%

If current proposal significantly deviates (e.g., stop is 5% instead of 2%), flag for review.

```

**Failure**: Flag as anomalous, reduce confidence, or reject if extreme deviation

### Consensus Building (Step 3)

**Requirement**: At least 2 strategies must agree on direction

**If single strategy generates signal**:

- Only execute if confidence > 0.8 AND strategy is top performer
- Otherwise, wait for confirming signal

**If strategies conflict**:

- No trade unless one has overwhelmingly high confidence (>0.9) AND the other is low (<0.3)

### Risk Checks (Steps 4-5)

**Position Risk Agent validates**:

- Stop-loss is set
- Position size respects risk limits
- Risk/reward ratio is acceptable

**Portfolio Risk Agent validates**:

- Total portfolio heat acceptable
- No concentration limit breached
- Correlations within bounds

**Both must approve** for trade to proceed.

### Anomaly Detection (Step 6)

**Continuous monitoring for**:

- Strategy behaving out of character (sudden high frequency)
- Confidence scores drifting (model degradation)
- Execution quality degrading (slippage increasing)

**If anomaly detected**: Reduce confidence or halt specific component

### Stress Testing

**Continuous Background Process**:

- Strategy agents tested on out-of-sample data monthly
- Full system stress tested on historical black swan events
- Monte Carlo simulation of portfolio under various scenarios

**If strategy fails stress test**: Reduced allocation or paused

### Shadow Trading Validation

**Parallel Universe**:

- All trades executed in paper trading simultaneously
- Compare live vs paper results daily

**If divergence detected**:

- Investigation triggered
- Possible execution quality issue
- Could indicate exchange issues or data problems

## Prompt engineering

(MISSING INFO)

## **7️⃣ HUMAN-IN-THE-LOOP (HITL)**

Design:

- HITL activation logic
- Override mechanisms
- Approval thresholds
- Read-only vs intervention modes
- Emergency stop procedures

## 7️⃣ HUMAN-IN-THE-LOOP (HITL)

### Activation Modes

**Mode 1: Observatory** (default)

- Human can view all activity
- No intervention required
- System fully autonomous

**Mode 2: Notification**

- Human receives alerts on significant events
- Still no intervention required

**Mode 3: Approval Required**

- System pauses before executing trades above threshold
- Human must explicitly approve or reject
- Timeout: If no response in 5 minutes, trade is rejected

**Mode 4: Override**

- Human can inject signals
- Human can halt strategies
- Human can modify parameters

**Mode 5: Emergency**

- Human can emergency stop all trading
- Human can force-close all positions
- Requires authentication + confirmation

### Approval Thresholds

**Trades requiring approval** (in Mode 3):

- Position size > 5% of portfolio
- New strategy's first live trade
- Trades during high volatility (VIX > threshold)
- Any trade that would breach custom rule set by operator

### Override Mechanisms

**Manual Signal Injection**:

```python
inject_signal(
    symbol="BTC/USDT",
    signal="buy",
    confidence=1.0,  # Override system signals
    rationale="Fundamental news: ETF approval",
    override_risk_checks=False  # Still subject to risk management
)

```

**Strategy Control**:

- Pause strategy
- Resume strategy
- Adjust strategy allocation
- Force strategy reset

**System Control**:

- Halt all trading
- Resume trading
- Modify global risk limits
- Trigger circuit breaker manually

### Emergency Stop Procedures

**Trigger Paths**:

1. Red emergency button in UI
2. SMS command with authentication
3. API endpoint with API key + 2FA
4. Automatic (circuit breaker conditions)

**When Triggered**:

1. Halt all order placement immediately
2. Cancel all pending orders
3. Optionally close all positions (configurable)
4. Lock system in safe mode
5. Alert all operators
6. Log full system state

**Recovery**:

- Requires explicit human authorization
- Cannot be automated
- Checklist must be completed before resume
- Gradual restart (not full speed immediately)

### Read-Only vs Intervention

**Read-Only Mode**:

- Human can view dashboard
- Can replay trade decisions
- Can see all agent rationales
- Cannot affect system behavior

**Intervention Mode** (requires authentication):

- Can approve/reject trades
- Can inject signals
- Can modify parameters
- All actions logged with operator ID

### UI for HITL

**Dashboard Sections**:

**1. System Status**

- Overall health indicator (green/yellow/red)
- Active positions count
- Total P&L
- Drawdown status

**2. Pending Approvals** (Mode 3)

- List of trades awaiting approval
- Each with full context (strategy, rationale, risk metrics)
- Approve/Reject buttons
- Timeout countdown

**3. Active Strategies**

- Status of each strategy (active/paused)
- Recent signals generated
- Performance metrics
- Pause/Resume controls

**4. Risk Dashboard**

- Current portfolio heat
- Drawdown chart
- Exposure by asset
- Correlation heatmap

**5. Recent Activity**

- Stream of recent events
- Agent decisions
- Executed trades
- Alerts

**6. Emergency Controls**

- Emergency stop button (prominent, red)
- Close all positions button
- Halt new trades button

**7. Manual Override Panel**

- Inject custom signal
- Modify risk parameters
- Override specific rule

### HITL Control Agent (L10 - Human Interface)

**Purpose**: Interface between human operators and system

**Modes**:

**Observatory Mode**: Human can view all activities, no intervention

**Approval Mode**: Human must approve trades above threshold

**Override Mode**: Human can inject signals or halt strategies

**Emergency Mode**: Human can emergency stop, close all positions

**Inputs**:

- UI commands
- Approval requests from Governor

**Outputs**:

- Approved/rejected trade decisions
- Manual signal injections
- System parameter updates

**Tools**:

- `request_approval(trade, reason)`
- `wait_for_human_input(timeout)`
- `inject_manual_signal(symbol, signal, override=True)`
- `emergency_halt(reason)`

## **8️⃣ UI / OBSERVABILITY**

Design a UI that shows:

- Live positions
- Strategy rationales
- Confidence scores
- Risk metrics
- Agent decisions & disagreements
- Audit logs
- Replay of decision timelines

## 8️⃣ UI / OBSERVABILITY

### Dashboard Architecture

**Technology Stack**:

- Frontend: React with real-time updates (WebSocket)
- Backend: FastAPI serving data from Redis + PostgreSQL
- Charts: Lightweight Charts by TradingView or Recharts

### Main Views

### 1. Live Positions View

**Displayed Info**:

```
┌─────────┬──────┬────────┬─────────┬────────┬────────┬─────────┐
│ Symbol  │ Side │ Entry  │ Current │ P&L    │ P&L %  │ Strategy│
├─────────┼──────┼────────┼─────────┼────────┼────────┼─────────┤
│BTC/USDT │ Long │ 48,250 │ 49,100  │ +$425  │ +1.76% │ Trend   │
│ETH/USDT │ Long │ 2,510  │ 2,490   │ -$40   │ -0.80% │ Breakout│
│ADA/USDT │Short │ 0.55   │ 0.53    │ +$120  │ +3.64% │ Mean Rev│
└─────────┴──────┴────────┴─────────┴────────┴────────┴─────────┘

```

**For each position, clickable details show**:

- Entry rationale (strategy's reasoning)
- Current stop-loss and take-profit levels
- Time held
- Risk metrics
- Strategy that opened it

### 2. Strategy Signals View

**Real-time signal stream**:

```
[14:32:15] Trend Following → BTC/USDT: BUY (conf: 0.82)
  Rationale: "Strong 4H uptrend, pullback to 50 EMA support,
             bullish divergence on RSI, volume confirming"
  Risk: 1.5% | R:R: 2.5:1 | Stop: $47,800

[14:31:40] Mean Reversion → ETH/USDT: SELL (conf: 0.65)
  Rationale: "Overbought on 1H timeframe, Z-score +2.3,
             divergence forming, ranging regime"
  Risk: 1.2% | R:R: 2:1 | Stop: $2,580

[14:30:22] ML Strategy → SOL/USDT: HOLD (conf: 0.45)
  Rationale: "Model uncertain, conflicting signals across features"

  Status: ❌ Rejected by consensus (only 1 strategy bullish)

```

### 3. Confidence Scores Dashboard

**For each active signal**:

- Overall confidence (post-consensus)
- Contributing strategies and their individual confidences
- Agreement score (how much strategies align)
- Historical win rate for similar setups

**Visualization**: Confidence meter (0-100%) with color coding

- Green (>70%): High confidence
- Yellow (40-70%): Medium confidence
- Red (<40%): Low confidence, likely no trade

### 4. Risk Metrics Dashboard

**Real-Time Metrics**:

- Portfolio heat: X% (bar showing proximity to limit)
- Daily drawdown: Y% (bar showing proximity to circuit breaker)
- Max drawdown: Z% (since inception)
- Sharpe ratio (trailing 30 days)
- Win rate (trailing 100 trades)
- Largest position: Symbol and % of portfolio
- Correlation risk: Highest correlation pair

**Visual Indicators**:

- Green: All metrics healthy
- Yellow: Approaching limits
- Red: At or exceeding limits

### 5. Agent Activity Log

**Filterable stream of all agent actions**:

```
[14:35:12] [Execution Agent] Placed order: BTC/USDT buy 0.5 @ 49,100
[14:35:10] [Trade Construction] Built order: BTC/USDT long, size 0.5
[14:35:08] [Portfolio Risk] Approved trade, heat now 7.5%
[14:35:07] [Position Risk] Approved, risk 1.5%, stop at 47,800
[14:35:05] [Consensus] Aggregated signal: BUY, confidence 0.82
[14:35:03] [Trend Following] Generated BUY signal, confidence 0.85
[14:35:02] [Breakout] Generated BUY signal, confidence 0.75
[14:35:01] [Mean Reversion] No signal

```

**Features**:

- Filter by agent type
- Filter by symbol
- Filter by event type
- Search functionality
- Export to CSV

### 6. Agent Disagreements View

**Highlights when strategies conflict**:

```
⚠️ CONFLICT DETECTED at 14:32:15 for BTC/USDT

Trend Following: BUY (confidence 0.85)
  "Strong uptrend, pullback buy opportunity"

Mean Reversion: SELL (confidence 0.70)
  "Overbought, expecting pullback"

Resolution: NO TRADE
  Reason: Strong disagreement, confidence reduced below threshold
  Agreement score: -0.45 (negative correlation)

```

**Purpose**: Transparency into how ensemble works, why trades are rejected

### 7. Audit Logs

**Complete trade lifecycle view**:

Click any trade → See full timeline:

```
Trade #1834: BTC/USDT Long
Status: CLOSED | P&L: +$425 (+1.76%)

Timeline:
[14:32:15] Signal generated by Trend Following (conf: 0.85)
[14:32:16] Signal generated by Breakout (conf: 0.75)
[14:32:17] Consensus: BUY (conf: 0.82)
[14:32:18] Backtesting comparison: Similar trades won 68% (N=42)
[14:32:19] Position risk check: PASS (risk 1.5%)
[14:32:20] Portfolio risk check: PASS (heat 7.5%)
[14:32:21] Anomaly detection: PASS
[14:32:22] Trade constructed: 0.5 BTC @ market, stop 47,800
[14:32:23] Execution: Order placed on Binance
[14:32:24] Execution: Filled at 49,120 (slippage: 0.04%)
[15:45:32] Stop-loss moved to breakeven (trailing stop)
[16:22:18] Take-profit hit at 50,350
[16:22:19] Position closed | Final P&L: +$425

Contributing Factors:
✓ 4H uptrend confirmed
✓ Pullback to support
✓ RSI bullish divergence
✓ Volume confirmation
✓ Multiple strategies agreed
✓ Low volatility environment

```

**Export**: Full audit log for any date range, compliance-ready

### 8. Replay Feature

**Replay any past decision**:

- Select trade from history
- See decision tree visualization
- Step through agent interactions
- See data state at each step
- Understand why trade was taken or rejected

**Use cases**:

- Post-trade analysis
- Strategy debugging
- Training/education
- Compliance review

### Alert System in UI

**Alert Categories**:

**Critical (Red)**:

- Emergency stop triggered
- Max drawdown reached
- System error
- Data feed failure

**Warning (Yellow)**:

- Approaching drawdown limit
- Strategy underperforming
- Anomaly detected
- High slippage observed

**Info (Blue)**:

- Trade executed
- Strategy paused by user
- Parameter changed

**Delivery Channels**:

- In-app notifications
- Browser push notifications
- Email
- SMS (critical only)
- Telegram bot
- Webhook (for integration)

### Performance Analytics

**Charts & Graphs**:

**Equity Curve**:

- Total portfolio value over time
- Overlay drawdown periods
- Mark strategy changes

**Strategy Attribution**:

- P&L contribution by strategy (pie chart)
- Strategy performance comparison (bar chart)
- Win rate trends (line chart)

**Risk Analysis**:

- Drawdown distribution (histogram)
- Trade return distribution (histogram)
- Correlation matrix (heatmap)
- Rolling Sharpe ratio (line chart)

**Execution Quality**:

- Slippage distribution (histogram)
- Fill rate (percentage)
- Average time to fill

### Customization

**User Preferences**:

- Dashboard layout (drag-and-drop panels)
- Default views on login
- Alert preferences (which alerts to receive, on what channels)
- Refresh rates
- Chart timeframes

Portfolio Display - Current Price and PnL

### Issue

The UI dashboard showed `--` (placeholders) instead of actual current prices and profit/loss values for open positions.

### Solution Implemented

Two-part fix covering both backend calculations and frontend display.

### Files Modified

- `app/main.py`
- `app/static/app.js`

### Backend Changes (`/portfolio` endpoint)

1. **Price Fetching**:
    - Accesses Analysis objects for each open position
    - Scans all timeframes to find most recent market data
    - Extracts latest Close price from most recent candle
2. **PnL Calculation**:
    - BUY positions: `(current_price - entry_price) × amount`
    - SELL positions: `(entry_price - current_price) × amount`
    - Percentage: `(unrealized_pnl / position_value) × 100`
3. **Enhanced Response**:
    
    ```json
    {
      "current_price": 50245.67,
      "unrealized_pnl": 245.50,
      "unrealized_pnl_pct": 2.45
    }
    
    ```
    
4. **Error Handling**:
    - Gracefully handles missing market data
    - Returns null for unavailable fields
    - Logs errors without breaking API

### Frontend Changes (`renderPortfolio` function)

1. **Price Display**:
    - Shows actual current price from API
    - Formatted to 2 decimal places
    - Falls back to `'--'` if unavailable
2. **PnL Formatting**:
    - Format: `"245.50 (2.45%)"`
    - Handles null/undefined gracefully
3. **Color Coding**:
    - Green (`pnl-pos`): Profitable positions
    - Red (`pnl-neg`): Losing positions
    - Instant visual feedback

### Result

- Real-time PnL monitoring
- Visual clarity with color coding
- Both dollar and percentage views
- Updates every 2 seconds
- Resilient to missing data

## **9️⃣ SECURITY & SAFETY**

Include:

- Permission boundaries
- Key management
- Blast-radius containment
- Rate limiting
- Compliance hooks
- Explainability requirements

## 9️⃣ SECURITY & SAFETY

### Permission Boundaries

**Role-Based Access Control (RBAC)**:

**Operator** (highest level):

- Full system access
- Can start/stop trading
- Can modify parameters
- Can access API keys
- Can view all logs

**Analyst**:

- Read-only access to all data
- No trade execution

**Auditor**:

- Read-only access to logs
- Can export data
- Cannot modify anything

**Each agent has specific permissions**:

- Strategy agents: Can only generate signals
- Risk agents: Can veto trades but not execute
- Execution agent: Can execute approved trades only
- Governor: Can control other agents

**Principle of Least Privilege**: Every agent has minimum permissions needed for its function

### Key Management

**API Keys** (exchange):

- Stored in HashiCorp Vault or AWS Secrets Manager
- Never in code or config files
- Rotated regularly (every 90 days)
- IP whitelist restrictions
- Withdrawal disabled (trading-only keys)

**Encryption**:

- At rest: All sensitive data encrypted (AES-256)
- In transit: TLS 1.3 for all communications
- Keys: Hardware security module (HSM) for key storage

**Multi-Signature for Critical Actions**:

- Emergency stop can be triggered by any operator
- Resuming from emergency requires 2 operators
- Modifying risk limits requires 2 operators
- API key rotation requires 2 operators

### Blast-Radius Containment

**Strategy Isolation**:

- Each strategy in separate container
- CPU/memory limits enforced
- If strategy crashes, only that strategy affected
- Strategies cannot call each other directly

**Exchange Isolation**:

- Each exchange has separate API client
- If one exchange fails, others unaffected
- Sub-accounts per strategy (if exchange supports)

**Failure Domains**:

- Data ingestion failure → Use cached data, reduce confidence
- Single strategy failure → Remove from ensemble
- Risk agent failure → Halt all trading (fail-safe)
- Execution agent failure → Halt trading, alert operators
- Database failure → Read-only mode until recovered

### Rate Limiting

**Exchange API**:

- Respect exchange rate limits (usually 1200 requests/minute)
- Implement token bucket algorithm
- Back off exponentially on rate limit errors
- Distribute requests across time

**Internal**:

- Agents can be called max X times per second
- Prevents runaway loops
- Protects against accidental DDOS

### Compliance Hooks

**Audit Trail**:

- Every action logged with timestamp and actor
- Immutable logs (append-only)
- Tamper-evident (cryptographic signatures)

**Reporting**:

- Daily trade reports generated automatically
- Monthly performance summaries
- Compliance exports (for regulatory reporting)

**Data Retention**:

- Trade data: 7 years (regulatory requirement)
- Logs: 2 years
- Tick data: 1 year, then aggregated

**Regulatory Compliance** (varies by jurisdiction):

- KYC/AML checks (if required)
- Trade reporting (if required)
- Best execution documentation
- Conflict of interest disclosures

### Explainability Requirements

**Every Trade Must Include**:

- Which strategy generated it
- Confidence score
- Rationale (human-readable)
- Risk parameters
- Expected outcome
- Historical analogs

**Regulatory Requirements** (EU GDPR, if applicable):

- Right to explanation for automated decisions
- Ability to replay decision process
- Human-readable rationale

**Internal Requirement**:

- No "black box" trades
- All decisions must be explainable to management
- Audit trail must support post-trade analysis

### Monitoring & Alerting (Security)

**Detect**:

- Unusual access patterns (login from new location)
- Unusual API usage (sudden spike)
- Failed authentication attempts
- Configuration changes
- Permission escalation attempts

**Response**:

- Lock account after N failed logins
- Alert security team
- Log all attempts
- Require MFA for sensitive actions

### Incident Response

**Security Incident Plan**:

**Detect** → **Contain** → **Investigate** → **Remediate** → **Review**

**Playbooks for**:

- Compromised API key
- Unauthorized access
- Data breach
- System intrusion
- Insider threat

**Each playbook includes**:

- Detection criteria
- Immediate containment steps
- Investigation procedures
- Communication plan
- Remediation steps
- Post-incident review

---

Full Traceability

The system generates a triple-layer trail for every single tick:

We use a standardized logging system in `BaseAgent` (`app/agents/base_agent.py`) that ensures consistency across the MAS. Agents should use:

- `self.log(message, level)`: Basic logging with standard prefix.
- `self.log_llm_call(prompt, symbol, result)`: Tracks model interactions.
- `self.log_market_action(action, symbol, data)`: Tracks data fetches and structural updates.

Example log output:

```bash
[MarketDataAgent] MARKET_ACTION: FETCH_DATA_LIVE for BTC-USDT | DATA: {'timeframe': '1h'}
[ValueAreasAgent] MARKET_ACTION: CALCULATE_VALUE_AREAS for BTC-USDT | DATA: {'timeframe': '1h', 'state': 'IN', 'poc': 87450.5}
[MarketStructureAgent] Received value areas update for BTC-USDT 1h
[MarketStructureAgent] MARKET_ACTION: UPDATE_STRUCTURE for BTC-USDT | DATA: {'timeframe': '1h', 'va_state': 'ASCENDING'}
[RegimeDetectionAgent] LLM_CALL: regime_decision for BTC-USDT | DATA: {'timeframe': '1h', 'regime': 'BULLISH'}

```

### B. Dashboard Trace (Visual)

The "Live Audit Trail" on the dashboard (`/static/index.html`) queries the database every 3 seconds. It shows JSON data for every event, allowing you to see the `rationale` string provided by the agents.

### C. Database (Deep Forensic)

Every event is saved in the `audit_logs` table. You can query it via SQL to see why a trade was (or wasn't) taken:

```sql
SELECT agent_name, event_type, data FROM audit_logs ORDER BY timestamp DESC LIMIT 20;

```

## 4. Troubleshooting

If you only see `market_data` and `regime_change`:

1. **Conditions not met**: Check the strategy agents' logs. If RSI is 50, the `StrategyAgent` won't publish a signal.
2. **Confidence**: The `Aggregator` requires a consensus score > 0.3. If strategies conflict (one says BUY, one says SELL), it results in a `HOLD`.
3. **Weighting**: In a `RANGING` market, a trend-following signal (EMA) will have its confidence reduced by the Aggregator.

### Reliability Improvements

- ✅ Automatic recovery from transient errors
- ✅ Complete data coverage across all timeframes
- ✅ Better error logging and observability

### User Experience Improvements

- ✅ Real-time position monitoring
- ✅ Instant profit/loss visibility
- ✅ Visual feedback through color coding
- ✅ Both absolute and percentage PnL views

### System Robustness

- ✅ Graceful handling of missing data
- ✅ No breaking changes to existing functionality
- ✅ Backward compatible API responses
- ✅ Centralized error handling

## Concurrency & Consistency Requirements

You must design a solution that ensures:

- No lost updates
- No stale reads
- No race conditions
- Deterministic event handling

Acceptable approaches include (but are not limited to):

- Copy-on-write + versioning
- Section-level locks
- Event-sourced updates
- Immutable snapshots + diff application

Explain your chosen approach in comments or documentation.

## **🔟 FINAL OUTPUT FORMAT**

Your final answer **must include**:

1. A **clear, structured explanation**
2. A **full ASCII system diagram**
3. A **table of agents & responsibilities**
4. A **step-by-step trade lifecycle walkthrough**
5. Design decisions & tradeoffs

Be explicit, technical, and assume this system is being reviewed by senior engineers, quants, and risk officers.

### Step-by-Step Trade Lifecycle Walkthrough

**Scenario**: System identifies potential BTC/USDT long opportunity

### Phase 1: Signal Generation (t=0s)

**Step 1**: Market Data Ingestion Agent fetches latest BTC/USDT data

- OHLCV for 5m, 15m, 1h, 4h timeframes
- Current orderbook
- Recent trade flow

**Step 2**: Feature Engineering Agents calculate indicators

- Technical Indicator Agent: RSI, MACD, Bollinger Bands
- Regime Detection Agent: Classifies as "trending bullish"
- Factor Agent: BTC momentum factor positive

**Step 3**: Strategy Agents analyze independently

**Trend Following Agent**:

- Detects: Strong 4H uptrend, pullback to 20 EMA on 1H
- Generates: BUY signal, confidence 0.85
- Rationale:
- MISSING INFO

## 3. Step-by-Step Flow (The "Trading Pulse")

Every 10-60 seconds, the following cycle triggers:

### Step 1: Ingestion

- **Agent**: `MarketDataAgent`
- **Action**: Fetches OHLCV from BingX.
- **Trace**: "Fetched 100 candles..."
- **Output**: Publishes `MARKET_DATA`.

### Step 2: Intelligence & Analysis (Sequential & Parallel)

- **Agent**: `ValueAreasAgent`
    - Listens to: `MARKET_DATA`
    - Action: Calculates VPVR, POC, and Value Areas.
    - Output: Publishes `VALUE_AREAS_UPDATED`.
- **Agent**: `MarketStructureAgent`
    - Listens to: `VALUE_AREAS_UPDATED`
    - Action: Analyzes POC trends (ASCENDING/DESCENDING) over the last 3 windows.
    - Output: Updates `market_structure` and publishes `ANALYSIS_UPDATE`.
- **Agent**: `RegimeDetectionAgent`
    - Listens to: `ANALYSIS_UPDATE`
    - Action: Runs ADX/ATR and combines with POC trends for final regime classification.
    - Trace: "Regime Change Detected: TRENDING -> RANGING"
- **Agent**: `StrategyAgents` (RSI/MACD, EMA Cross)
    - Listen to: `MARKET_DATA`
    - Action: Calculate indicators.
    - Trace: "[RSI_MACD] Indicators >> RSI: 45.2 ... [HOLD]"
    - Output: Publishes `STRATEGY_SIGNAL` (if criteria met).

### Step 3: Consensus

- **Agent**: `AggregatorAgent`
    - Listens to: `STRATEGY_SIGNAL` and `REGIME_CHANGE`.
    - Action: Buffers signals for 5 seconds. If in `RANGING` regime, it gives higher weight to RSI. If `TRENDING`, it favors EMA Cross.
    - Output: Publishes `SIGNAL`.

### Step 4: Safety & Risk

- **Agent**: `RiskAgent`
    - Listens to: `SIGNAL`
    - Action: Checks BingX balance. If balance < trade size, it rejects.
    - Output: Publishes `ORDER_REQUEST`.
- **Agent**: `AnomalyDetectionAgent`
    - Listens to: `SIGNAL` & `MARKET_DATA`
    - Action: Monitors for flash crashes or "spam" signals (circuit breaker).

### Step 5: Final Execution

- **Agent**: `ExecutionAgent`
    - Listens to: `ORDER_REQUEST`
    - Action: Hits the BingX API to open a position.
    - Output: Publishes `ORDER_FILLED`.