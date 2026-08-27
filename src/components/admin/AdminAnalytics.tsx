import React from 'react';
import { useApp } from '../../context/AppContext';
import { REVENUE_STREAMS } from '../../data/ecosystemData';
import {
  Download
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export const AdminAnalytics: React.FC = () => {
  const { formatCurrency, showToast } = useApp();

  const streamsData = REVENUE_STREAMS.map(s => ({
    name: s.title.replace('（', ' ').replace('）', '').slice(0, 8),
    fullName: s.title,
    revenueUSD: s.annualProjectedUSD,
    color: s.color
  }));

  const totalProjectedUSD = REVENUE_STREAMS.reduce((acc, s) => acc + s.annualProjectedUSD, 0);

  const handleExportReport = () => {
    showToast('财务审计摘要已导出', '已生成适配高管及投资人审阅的沙巴区域生态财务模型 PDF 与 CSV 审计底稿。', 'success');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white">运营商营收与单客模型分析</h2>
          <p className="text-xs text-slate-400 mt-1">
            深度解构6大收益流结构、酒店房源利差、专车直升机高毛利沉淀及商户闭环消费提成。
          </p>
        </div>

        <button
          onClick={handleExportReport}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-200 border border-slate-700 flex items-center space-x-2 self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5" />
          <span>导出财务审计报告</span>
        </button>
      </div>

      {/* Annual Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card-gold p-6 rounded-2xl border-amber-500/40 space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">
            年度运营商预测总毛利
          </span>
          <div className="text-3xl font-serif font-bold text-amber-400">
            {formatCurrency(totalProjectedUSD)}
          </div>
          <p className="text-xs text-slate-300 pt-1">涵盖6大核心商业化变现管道</p>
        </div>

        <div className="glass-card-emerald p-6 rounded-2xl border-emerald-500/40 space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block">
            运营商综合净毛利率
          </span>
          <div className="text-3xl font-serif font-bold text-emerald-400">
            24.8%
          </div>
          <p className="text-xs text-slate-300 pt-1">高确定性批发协议利差与直营车队收益</p>
        </div>

        <div className="glass-card-cyan p-6 rounded-2xl border-cyan-500/40 space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-cyan-300 font-bold block">
            抵港会员人均在沙巴总消费
          </span>
          <div className="text-3xl font-serif font-bold text-cyan-300">
            {formatCurrency(3650)}
          </div>
          <p className="text-xs text-slate-300 pt-1">平均沙巴单次停留 5.2 天行程周期</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bar Chart: 6 Revenue Streams */}
        <div className="lg:col-span-8 glass-card p-6 rounded-2xl border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h3 className="text-base font-bold text-white">六大变现管道收益结构对比</h3>
            <span className="text-xs text-slate-400">首年预测毛利 (USD)</span>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={streamsData}>
                <XAxis dataKey="name" stroke="#64748B" fontSize={10} />
                <YAxis stroke="#64748B" fontSize={11} tickFormatter={(val) => `$${val / 1000000}M`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                  formatter={(val: number) => [`$${val.toLocaleString()}`, '年度预测收益']}
                />
                <Bar dataKey="revenueUSD" radius={[6, 6, 0, 0]}>
                  {streamsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart: Revenue Stream Mix */}
        <div className="lg:col-span-4 glass-card p-6 rounded-2xl border-slate-800 space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white">收入组合占比结构</h3>
            <p className="text-xs text-slate-400">多元协同、高抗风险的收益组合</p>
          </div>

          <div className="h-44 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={streamsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={65}
                  paddingAngle={3}
                  dataKey="revenueUSD"
                >
                  {streamsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                  formatter={(val: number) => [`$${val.toLocaleString()}`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5 text-xs">
            {streamsData.map(s => (
              <div key={s.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-slate-300 truncate max-w-[150px]">{s.fullName}</span>
                </div>
                <span className="font-bold text-white">{formatCurrency(s.revenueUSD)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
