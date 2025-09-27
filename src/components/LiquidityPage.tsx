import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgEthIcon from "figma:asset/e0462ae91ad6c89c3a1b6ef05c14ed6beb477985.png";

// Mock pool data
const poolsData = [
  {
    id: 1,
    token0: { symbol: "WETH", icon: imgEthIcon },
    token1: { symbol: "USDC", icon: "https://images.unsplash.com/photo-1642753174692-91d8bebcab7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXRoZXIlMjBjcnlwdG9jdXJyZW5jeSUyMHN0YWJsZSUyMGNvaW58ZW58MXx8fHwxNzU5MDA1MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    feeTier: "0.3%",
    tvl: "$45.2M",
    volume24h: "$12.4M",
    fees24h: "$37.2K",
    apr: "8.45%"
  },
  {
    id: 2,
    token0: { symbol: "WETH", icon: imgEthIcon },
    token1: { symbol: "WBTC", icon: "https://images.unsplash.com/photo-1707075891510-960cc9ecfcd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXRoZXIlMjBjcnlwdG9jdXJyZW5jeSUyMHN0YWJsZSUyMGNvaW58ZW58MXx8fHwxNzU5MDA1MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    feeTier: "0.3%",
    tvl: "$23.8M",
    volume24h: "$8.9M",
    fees24h: "$26.7K",
    apr: "12.3%"
  },
  {
    id: 3,
    token0: { symbol: "USDC", icon: "https://images.unsplash.com/photo-1642753174692-91d8bebcab7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXRoZXIlMjBjcnlwdG9jdXJyZW5jeSUyMHN0YWJsZSUyMGNvaW58ZW58MXx8fHwxNzU5MDA1MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    token1: { symbol: "USDT", icon: "https://images.unsplash.com/photo-1642753174692-91d8bebcab7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXRoZXIlMjBjcnlwdG9jdXJyZW5jeSUyMHN0YWJsZSUyMGNvaW58ZW58MXx8fHwxNzU5MDA1MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    feeTier: "0.05%",
    tvl: "$67.1M",
    volume24h: "$45.2M",
    fees24h: "$22.6K",
    apr: "5.2%"
  },
  {
    id: 4,
    token0: { symbol: "WETH", icon: imgEthIcon },
    token1: { symbol: "DAI", icon: "https://images.unsplash.com/photo-1642753174692-91d8bebcab7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXRoZXIlMjBjcnlwdG9jdXJyZW5jeSUyMHN0YWJsZSUyMGNvaW58ZW58MXx8fHwxNzU5MDA1MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    feeTier: "0.3%",
    tvl: "$18.9M",
    volume24h: "$6.7M",
    fees24h: "$20.1K",
    apr: "15.8%"
  },
  {
    id: 5,
    token0: { symbol: "WBTC", icon: "https://images.unsplash.com/photo-1707075891510-960cc9ecfcd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXRoZXIlMjBjcnlwdG9jdXJyZW5jeSUyMHN0YWJsZSUyMGNvaW58ZW58MXx8fHwxNzU5MDA1MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    token1: { symbol: "USDC", icon: "https://images.unsplash.com/photo-1642753174692-91d8bebcab7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXRoZXIlMjBjcnlwdG9jdXJyZW5jeSUyMHN0YWJsZSUyMGNvaW58ZW58MXx8fHwxNzU5MDA1MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    feeTier: "0.3%",
    tvl: "$31.4M",
    volume24h: "$11.8M",
    fees24h: "$35.4K",
    apr: "9.7%"
  }
];

function StatsCard({ title, value, change }: { title: string; value: string; change?: string }) {
  return (
    <div className="bg-[rgba(156,163,175,0.1)] rounded-[12px] p-6 border border-[rgba(243,244,246,0.1)]">
      <div className="flex flex-col gap-2">
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-white text-2xl font-medium">{value}</p>
        {change && (
          <p className="text-green-400 text-sm">+{change}</p>
        )}
      </div>
    </div>
  );
}

function PoolRow({ pool }: { pool: typeof poolsData[0] }) {
  return (
    <tr className="border-b border-[rgba(156,163,175,0.1)] hover:bg-[rgba(156,163,175,0.05)]">
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-950">
              {pool.token0.icon.startsWith('http') ? (
                <ImageWithFallback 
                  src={pool.token0.icon} 
                  alt={pool.token0.symbol}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={pool.token0.icon} 
                  alt={pool.token0.symbol}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-950">
              {pool.token1.icon.startsWith('http') ? (
                <ImageWithFallback 
                  src={pool.token1.icon} 
                  alt={pool.token1.symbol}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={pool.token1.icon} 
                  alt={pool.token1.symbol}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium">
              {pool.token0.symbol}/{pool.token1.symbol}
            </span>
            <span className="text-gray-400 text-sm">{pool.feeTier}</span>
          </div>
        </div>
      </td>
      <td className="py-4 px-6 text-white">{pool.tvl}</td>
      <td className="py-4 px-6 text-white">{pool.volume24h}</td>
      <td className="py-4 px-6 text-white">{pool.fees24h}</td>
      <td className="py-4 px-6">
        <span className="text-green-400 font-medium">{pool.apr}</span>
      </td>
    </tr>
  );
}

export function LiquidityPage() {
  return (
    <div className="bg-gray-950 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard title="Total value locked" value="$186.3M" change="2.4%" />
          <StatsCard title="Volume 24H" value="$84.9M" change="15.7%" />
          <StatsCard title="Fees 24H" value="$142.0K" change="8.3%" />
        </div>

        {/* Pools Section */}
        <div className="bg-[rgba(156,163,175,0.1)] rounded-[12px] border border-[rgba(243,244,246,0.1)] overflow-hidden">
          <div className="p-6 border-b border-[rgba(156,163,175,0.1)]">
            <h2 className="text-white text-xl font-medium">Top Pools</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(156,163,175,0.1)]">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Pool</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">TVL</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Volume 24H</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Fees 24H</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">APR</th>
                </tr>
              </thead>
              <tbody>
                {poolsData.map((pool) => (
                  <PoolRow key={pool.id} pool={pool} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}