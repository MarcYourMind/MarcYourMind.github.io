window.MOCK_DATA = {
    status: {
        is_running: true,
        config: {
            symbols: ["BTC/USDT", "ETH/USDT", "SOL/USDT", "BNB/USDT"],
            timeframe: "1h",
            sandbox: true,
            demo_mode: true
        }
    },
    agents: [
        {
            name: "GovernorAgent",
            type: "Orchestrator",
            status: "active",
            is_running: true,
            is_active: true,
            uptime: 12450,
            processed_count: 850,
            description: "Main orchestration agent managing the lifecycle of all other agents and system health.",
            tasks: ["Agent Coordination", "Health Monitoring", "System Scaling"],
            responsibilities: ["Error Handling", "Resource Allocation"],
            prompts: ["governor/orchestration"]
        },
        {
            name: "MarketDataAgent",
            type: "Data Provider",
            status: "active",
            is_running: true,
            is_active: true,
            uptime: 12448,
            processed_count: 124500,
            description: "Streams real-time market data and manages websocket connections.",
            tasks: ["WS Streaming", "Data Normalization"],
            responsibilities: ["Latency Management", "Orderbook Consistency"],
            prompts: ["market/data_normalization"]
        },
        {
            name: "RegimeDetectionAgent",
            type: "Analyst",
            status: "active",
            is_running: true,
            is_active: true,
            uptime: 12440,
            processed_count: 520,
            description: "Analyzes market structure to determine trending vs ranging regimes.",
            data: {
                regimes: {
                    "BTC/USDT": "TRENDING",
                    "ETH/USDT": "RANGING",
                    "SOL/USDT": "TRENDING",
                    "BNB/USDT": "TRENDING"
                }
            },
            tasks: ["Hurst Calculation", "ADX Analysis"],
            responsibilities: ["Regime Classification"],
            prompts: ["analysis/regime_detection"]
        },
        {
            name: "StrategyAgent",
            type: "Strategist",
            status: "active",
            is_running: true,
            is_active: true,
            uptime: 12435,
            processed_count: 128,
            description: "Executes trading logic based on technical indicators and volume profile.",
            tasks: ["EMA Cross", "Volume Analysis", "Pivot Points"],
            responsibilities: ["Signal Generation"],
            prompts: ["strategy/ema_cross", "strategy/volume_profile"]
        },
        {
            name: "RiskAgent",
            type: "Gatekeeper",
            status: "active",
            is_running: true,
            is_active: true,
            uptime: 12430,
            processed_count: 420,
            description: "Monitors exposure levels and enforces stop-loss/take-profit boundaries.",
            tasks: ["Position Sizing", "Max Drawdown Check"],
            responsibilities: ["Capital Preservation"],
            prompts: ["risk/position_sizing"]
        },
        {
            name: "ExecutionAgent",
            type: "Executor",
            status: "active",
            is_running: true,
            is_active: true,
            uptime: 12425,
            processed_count: 45,
            description: "Interfaces with exchange APIs to place and manage orders.",
            tasks: ["Order Placement", "Slippage Monitoring"],
            responsibilities: ["Execution Efficiency"],
            prompts: ["execution/order_management"]
        }
    ],
    portfolio: [
        {
            id: 1,
            symbol: "BTC/USDT",
            side: "buy",
            amount: 0.25,
            price: 64250.00,
            sl_price: 62000.00,
            tp_price: 70000.00,
            current_price: 65120.50,
            unrealized_pnl: 217.62,
            unrealized_pnl_pct: 1.35,
            status: "FILLED"
        },
        {
            id: 2,
            symbol: "SOL/USDT",
            side: "buy",
            amount: 15.0,
            price: 142.50,
            sl_price: 135.00,
            tp_price: 165.00,
            current_price: 148.75,
            unrealized_pnl: 93.75,
            unrealized_pnl_pct: 4.38,
            status: "FILLED"
        }
    ],
    trades: [
        {
            id: 101,
            timestamp: new Date(Date.now() - 3600000).toISOString(),
            closed_at: new Date(Date.now() - 600000).toISOString(),
            symbol: "ETH/USDT",
            side: "buy",
            amount: 2.5,
            price: 3450.25,
            exit_price: 3520.10,
            pnl: 174.62,
            rationale: "EMA 20/50 Cross on 1h timeframe with high volume support."
        },
        {
            id: 100,
            timestamp: new Date(Date.now() - 7200000).toISOString(),
            closed_at: new Date(Date.now() - 4200000).toISOString(),
            symbol: "BTC/USDT",
            side: "sell",
            amount: 0.1,
            price: 65800.00,
            exit_price: 65200.00,
            pnl: 60.00,
            rationale: "RSI overbought and rejection at key resistance level."
        }
    ],
    logs: [
        {
            id: 1,
            timestamp: new Date().toISOString(),
            agent_name: "GovernorAgent",
            event_type: "system_status",
            data: "Trading system is fully operational."
        },
        {
            id: 2,
            timestamp: new Date(Date.now() - 10000).toISOString(),
            agent_name: "StrategyAgent",
            event_type: "signal_detected",
            data: { symbol: "BTC/USDT", side: "buy", confidence: 0.85 }
        },
        {
            id: 3,
            timestamp: new Date(Date.now() - 20000).toISOString(),
            agent_name: "MarketDataAgent",
            event_type: "market_data",
            data: { symbol: "BTC/USDT", latest_close: 65120.50, candles: 100 }
        }
    ],
    equity: [
        { timestamp: new Date(Date.now() - 86400000).toISOString(), total_equity: 10000.00 },
        { timestamp: new Date(Date.now() - 64800000).toISOString(), total_equity: 10050.20 },
        { timestamp: new Date(Date.now() - 43200000).toISOString(), total_equity: 9980.45 },
        { timestamp: new Date(Date.now() - 21600000).toISOString(), total_equity: 10120.80 },
        { timestamp: new Date().toISOString(), total_equity: 10245.35 }
    ],
    prompts: {
        "governor/orchestration": { system: "You are the Governor Agent...", user: "Execute orchestration task..." },
        "analysis/regime_detection": { system: "You are the Regime Detection Agent...", user: "Analyze market data for BTC/USDT..." }
    }
};
