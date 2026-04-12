"use client";

import React, { useState, useEffect } from 'react';
import { Building2, Users, CreditCard, AlertCircle, ArrowUpRight, ArrowDownRight, TrendingUp, ExternalLink, Compass } from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    PieChart,
    Pie,
    Sector
} from 'recharts';

const DashboardPage = () => {
    const stats = [
        { label: '전체 보유 건물', value: '4개', icon: Building2, color: 'text-primary', bg: 'bg-primary/10', trend: '+12%', isUp: true },
        { label: '총 세입자', value: '128명', icon: Users, color: 'text-accent', bg: 'bg-accent/10', trend: '+5%', isUp: true },
        { label: '이번 달 매출', value: '4,520만원', icon: CreditCard, color: 'text-success', bg: 'bg-success/10', trend: '+2.4%', isUp: true },
        { label: '미납 및 연체', value: '3건', icon: AlertCircle, color: 'text-danger', bg: 'bg-danger/10', trend: '-1건', isUp: false },
    ];

    const revenueData = [
        { name: '1월', value: 3800 },
        { name: '2월', value: 4100 },
        { name: '3월', value: 4520 },
        { name: '4월', value: 4200 },
        { name: '5월', value: 4900 },
        { name: '6월', value: 5200 },
    ];

    const occupancyData = [
        { name: '입주', value: 85 },
        { name: '공실', value: 15 },
    ];

    const [isMounted, setIsMounted] = useState(false);

    // 초기 마운트 시 렌더링 최적화
    useEffect(() => {
        setIsMounted(true);
    }, []);



    const COLORS = ['#3b82f6', 'rgba(59, 130, 246, 0.1)'];

    const [isChartHovered, setIsChartHovered] = useState(false);

    return (
        <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col gap-1 relative">
                <h2 className="text-3xl font-bold tracking-tight">대시보드</h2>
                <p className="text-secondary text-sm">오늘의 부동산 관리 현황을 요약해 드립니다.</p>
                <span className="absolute top-0 right-0 px-2 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold rounded-lg border border-amber-500/20">
                    ⚠️ 시뮬레이션 데이터 (가상)
                </span>
            </div>

            {/* 상단 통계 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="glass p-6 rounded-3xl border shadow-sm card-hover">
                        <div className="flex justify-between items-start">
                            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <div className={`flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full ${stat.isUp ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {stat.trend}
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="text-xs font-bold text-secondary uppercase tracking-tight">{stat.label}</p>
                            <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* 차트 섹션 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass rounded-3xl border shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b bg-secondary/5 flex items-center justify-between">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                            <TrendingUp className="text-primary" size={20} />
                            월별 매출 추이
                        </h3>
                        <select className="bg-card/30 border rounded-xl px-3 py-1.5 text-xs font-bold outline-none focus:ring-2 ring-primary/20">
                            <option>최근 6개월</option>
                            <option>최근 1년</option>
                        </select>
                    </div>
                    <div className="p-6 h-[320px] w-full">
                        {isMounted ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={revenueData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(59, 130, 246, 0.05)" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(59, 130, 246, 0.05)', radius: 8 }}
                                        contentStyle={{ backgroundColor: '#0d1117', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '16px', color: '#fff', fontSize: '12px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.3)' }}
                                        animationDuration={200}
                                    />
                                    <Bar
                                        dataKey="value"
                                        fill="#3b82f6"
                                        radius={[6, 6, 0, 0]}
                                        barSize={32}
                                        animationDuration={500}
                                        animationEasing="ease-out"
                                        activeBar={{ fill: '#60a5fa', stroke: '#3b82f6', strokeWidth: 1 }}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="w-full h-full bg-secondary/5 rounded-2xl animate-pulse" />
                        )}
                    </div>
                </div>

                <div className="glass rounded-3xl border shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b bg-secondary/5">
                        <h3 className="text-lg font-bold text-center">전체 점유율</h3>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-center">
                        <div
                            className="h-[200px] w-[200px] mx-auto relative cursor-default rounded-full"
                            onMouseEnter={() => setIsChartHovered(true)}
                            onMouseLeave={() => setIsChartHovered(false)}
                        >
                            <div className={`w-full h-full transition-transform duration-500 ease-out ${isChartHovered ? 'scale-110' : ''}`}>
                                {isMounted ? (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={occupancyData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={65}
                                                outerRadius={85}
                                                paddingAngle={8}
                                                dataKey="value"
                                                stroke="none"
                                                isAnimationActive={true}
                                            >
                                                {occupancyData.map((entry, index) => (
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={COLORS[index % COLORS.length]}
                                                        stroke="none"
                                                        style={{ outline: 'none' }}
                                                    />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="w-full h-full rounded-full border-8 border-secondary/10 animate-pulse" />
                                )}
                            </div>
                            <div className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-transform duration-500 ease-out ${isChartHovered ? 'scale-110' : ''}`}>
                                <p className="text-3xl font-black text-primary">85%</p>
                                <p className="text-[10px] text-secondary font-black uppercase tracking-widest mt-1">입주 완료</p>
                            </div>
                        </div>
                        <div className="mt-8 space-y-3 bg-secondary/5 p-4 rounded-2xl border">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                    <span className="text-[11px] font-bold text-secondary">입주 (108실)</span>
                                </div>
                                <span className="text-[11px] font-black">85%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
                                    <span className="text-[11px] font-bold text-secondary">공실 (20실)</span>
                                </div>
                                <span className="text-[11px] font-black">15%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 최근 목록 섹션 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass rounded-3xl border shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b bg-secondary/5 flex justify-between items-center">
                        <h3 className="text-lg font-bold">최근 수납 내역</h3>
                        <button className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-xl hover:bg-primary/20 transition-colors">전체 보기</button>
                    </div>
                    <div className="p-3 bg-card-secondary space-y-1">
                        {[
                            { name: '김철수', room: '강남빌딩 302호', amount: '120만원', status: '완료', date: '오늘' },
                            { name: '이미영', room: '서초타워 1501호', amount: '250만원', status: '대기', date: '어제' },
                            { name: '박지성', room: '강남빌딩 101호', amount: '80만원', status: '완료', date: '2일 전' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-secondary/10 transition-all border border-transparent group">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center font-black text-primary text-lg shadow-inner">
                                        {item.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm tracking-tight">{item.name}</p>
                                        <p className="text-[11px] text-secondary font-medium mt-0.5">{item.room}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-sm">{item.amount}</p>
                                    <div className="flex items-center justify-end gap-1.5 mt-1">
                                        <span className={`w-1.5 h-1.5 rounded-full ${item.status === '완료' ? 'bg-success' : 'bg-warning animate-pulse'}`} />
                                        <p className={`text-[11px] font-bold ${item.status === '완료' ? 'text-success' : 'text-warning'}`}>
                                            {item.status} · {item.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass rounded-3xl border shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b bg-secondary/5 flex justify-between items-center">
                        <h3 className="text-lg font-bold">유지보수 요청</h3>
                        <button className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-xl hover:bg-primary/20 transition-colors">전체 보기</button>
                    </div>
                    <div className="p-4 space-y-3">
                        {[
                            { title: '엘리베이터 소음', building: '서초타워', priority: '높음', status: '접수' },
                            { title: '302호 세면대 누수', building: '강남빌딩', priority: '보통', status: '진행 중' },
                            { title: '옥상 방수 점검', building: '신사엠파이어', priority: '중요', status: '완료' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl border hover:border-primary/20 hover:bg-secondary/5 transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className={`w-1.5 h-10 rounded-full ${item.priority === '높음' ? 'bg-danger shadow-[0_0_10px_rgba(239,68,68,0.4)]' : item.priority === '보통' ? 'bg-warning' : 'bg-primary'
                                        }`} />
                                    <div>
                                        <p className="font-bold text-sm tracking-tight group-hover:text-primary transition-colors">{item.title}</p>
                                        <p className="text-[11px] text-secondary font-medium mt-0.5">{item.building}</p>
                                    </div>
                                </div>
                                <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${item.status === '접수' ? 'bg-danger/10 text-danger' :
                                    item.status === '진행 중' ? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
                                    }`}>
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 부동산 분석 섹션 (인레이더 연결) */}
            <div className="glass p-8 rounded-[2rem] shadow-lg relative overflow-hidden group border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Compass size={140} className="text-primary" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-2xl bg-gradient-to-tr from-primary to-accent text-white shadow-lg shadow-primary/20">
                                <Compass size={24} />
                            </div>
                            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-lg uppercase tracking-widest border border-primary/20">
                                Smart Analysis
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
                            인레이더 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">부동산 분석</span> 시스템
                        </h3>
                        <p className="text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
                            빅데이터를 활용한 부동산 투자 트렌드 파악과, 글로벌한 투자흐름을 확인하세요. 

                        </p>
                    </div>
                    
                    <a 
                        href="https://inradars365.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 active:scale-95 transition-all w-full md:w-auto justify-center group/btn"
                    >
                        <span>인레이더 분석 서비스 바로가기</span>
                        <ExternalLink size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-24 bg-accent/5 rounded-full blur-3xl" />
            </div>
        </div>
    );
};


export default DashboardPage;
