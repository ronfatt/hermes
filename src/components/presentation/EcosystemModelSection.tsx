import React, { useState } from 'react';
import {
  Users,
  Building,
  Layers,
  Coins,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const EcosystemModelSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('hub');

  const nodes = [
    {
      id: 'members',
      title: '1. 爱马仕全球会员资产',
      badge: '客流需求引擎',
      subtitle: '120,000+ 全球认证的高净值与黑卡/白金会员',
      icon: <Users className="w-6 h-6 text-amber-400" />,
      color: 'border-amber-500/50 bg-amber-500/10 text-amber-300',
      description: '寻求远离大众喧嚣、渴望高品质私密生态度假的爱马仕国际高净值会员。具备极强的可支配收入与高品牌忠诚度。',
      metrics: [
        '人均单次沙巴出游预算：$2,500 - $12,000 美元',
        '通过爱马仕全球APP与专属VIP私享刊物定向直达',
        '高品质前置筛选的高净值目标客群'
      ]
    },
    {
      id: 'hub',
      title: '2. 沙巴落地中枢与运营商引擎',
      badge: '清结算与履约核心',
      subtitle: '设于亚庇的独家区域入境服务中心与运营总控',
      icon: <Building className="w-6 h-6 text-cyan-400" />,
      color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300',
      description: '实体落地运营指挥中枢，统一协调机场机坪礼宾接待、五星级酒店批发级房源锁定、私家游艇车队调度及全域商户网络数字化清结算。',
      metrics: [
        '专业双语私人旅行管家与安保陪同团队',
        '与沙巴五星级酒店、直升机公司签署独家批发底价协议',
        '商户端统一铺设 H Pass 动态数字验证核销终端'
      ]
    },
    {
      id: 'channels',
      title: '3. 多元生态赋能通道',
      badge: '体验与变现载体',
      subtitle: '定制套餐 · 联盟商户 · 年度峰会 · 积分体系',
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300',
      description: '将抵港会员精准分流至四大沙巴实体变现场景：3款高毛利定制游套餐、150余家联盟商户特权消费、沙巴年度全球峰会及 H-Credits 积分闭环。',
      metrics: [
        '3大旗舰定制文旅产品（初见启幕、传奇甄选、至尊私享）',
        '遍布亚庇海滨、加雅岛、神山高地的150+家联盟商户',
        '沙巴国际会议中心举办的爱马仕年度峰会与游艇晚宴'
      ]
    },
    {
      id: 'revenue',
      title: '4. 高毛利实体经济与商业变现',
      badge: '价值捕获闭环',
      subtitle: '运营商丰厚利润留存与沙巴实体经济高产出',
      icon: <Coins className="w-6 h-6 text-purple-400" />,
      color: 'border-purple-500/50 bg-purple-500/10 text-purple-300',
      description: '将会员的数字资产全面转化为沙巴本地实体GDP与运营商可持续的高利润现金流，形成强大的自我强化正向飞轮。',
      metrics: [
        '6大结构化运营商直接盈利变现管道',
        '综合毛利率达 22% - 28% 的高利润率模型',
        '推动沙巴本地高端服务业、酒店业与手工艺持续繁荣'
      ]
    }
  ];

  return (
    <section id="ecosystem-model" className="py-24 px-4 sm:px-6 lg:px-8 bg-slateDark-950 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>核心运营飞轮模型</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            生态运转飞轮 (Ecosystem Model)
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            从全球会员资产直达沙巴文旅落地中枢，通过四大实体体验通道，实现高利润率的区域运营商经济闭环。
          </p>
        </div>

        {/* Interactive Visual Flywheel Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {nodes.map((node, i) => (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                selectedNode === node.id
                  ? 'bg-slate-900 border-amber-500 shadow-gold-sm scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
              }`}
            >
              {/* Connector Arrow for Desktop */}
              {i < nodes.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center text-slate-400">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl ${node.color}`}>
                    {node.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {node.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{node.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{node.subtitle}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className={selectedNode === node.id ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                  {selectedNode === node.id ? '● 正在展开' : '点击查看解析'}
                </span>
                <ArrowRight className={`w-3.5 h-3.5 ${selectedNode === node.id ? 'text-amber-400' : 'text-slate-500'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Drill-down Detail Panel for Selected Node */}
        {nodes
          .filter(n => n.id === selectedNode)
          .map(active => (
            <div
              key={active.id}
              className="glass-card p-6 sm:p-8 rounded-2xl border-amber-500/30 bg-slate-900/90 shadow-gold-sm animate-fadeIn"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 uppercase tracking-wider">
                      {active.badge}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">{active.title}</h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">{active.description}</p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-amber-400 block">
                      核心运营执行关键点：
                    </span>
                    {active.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Visual Card on right */}
                <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                    客流转化与价值沉淀指标
                  </span>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-300">目标全球会员客群池:</span>
                      <span className="text-amber-400 font-bold">120,000+ 全球储备</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-300">首年沙巴造访转化率:</span>
                      <span className="text-emerald-400 font-bold">4.2% 首期目标</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-300">沙巴本地闭环消费留存:</span>
                      <span className="text-cyan-400 font-bold">88% 闭环留存率</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
