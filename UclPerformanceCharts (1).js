import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const UclPerformanceCharts = () => {
  const [activeChart, setActiveChart] = useState('progression');
  
  const clubs = [
    {
      name: 'PSG',
      color: '#004170',
      takeoverYear: 2011,
      owner: 'Qatar Sports Investments',
      yearsToUCL: 1,
      bestFinish: 2,
      bestFinishYear: '2020',
      totalInvestment: 1500,
      uefaRankingBefore: 43,
      uefaRankingAfter: 7,
      ucl2013: 8,
      ucl2014: 8,
      ucl2015: 8,
      ucl2016: 8,
      ucl2017: 16,
      ucl2018: 16,
      ucl2019: 16,
      ucl2020: 2,
      ucl2021: 4,
      ucl2022: 16,
      ucl2023: 4,
      ucl2024: 4,
      totalUCLAppearances: 11,
      avgGoalsScored: 2.1,
      majorTrophiesWon: 24,
      revenueGrowth: 400,
      transferSpending: 1600,
      marketValue: 1000
    },
    {
      name: 'Man City',
      color: '#6CABDD',
      takeoverYear: 2008,
      owner: 'Abu Dhabi United Group',
      yearsToUCL: 3,
      bestFinish: 1,
      bestFinishYear: '2023',
      totalInvestment: 2100,
      uefaRankingBefore: 68,
      uefaRankingAfter: 2,
      ucl2013: 32,
      ucl2014: 16,
      ucl2015: 16,
      ucl2016: 4,
      ucl2017: 16,
      ucl2018: 8,
      ucl2019: 8,
      ucl2020: 8,
      ucl2021: 2,
      ucl2022: 4,
      ucl2023: 1,
      ucl2024: 8,
      totalUCLAppearances: 12,
      avgGoalsScored: 2.3,
      majorTrophiesWon: 20,
      revenueGrowth: 450,
      transferSpending: 2200,
      marketValue: 1300
    },
    {
      name: 'Chelsea',
      color: '#034694',
      takeoverYear: 2003,
      owner: 'Roman Abramovich',
      yearsToUCL: 0,
      bestFinish: 1,
      bestFinishYear: '2012, 2021',
      totalInvestment: 1800,
      uefaRankingBefore: 28,
      uefaRankingAfter: 5,
      ucl2013: 32,
      ucl2014: 4,
      ucl2015: 16,
      ucl2016: 16,
      ucl2017: 0,
      ucl2018: 16,
      ucl2019: 8,
      ucl2020: 16,
      ucl2021: 1,
      ucl2022: 8,
      ucl2023: 8,
      ucl2024: 4,
      totalUCLAppearances: 17,
      avgGoalsScored: 1.9,
      majorTrophiesWon: 21,
      revenueGrowth: 380,
      transferSpending: 1900,
      marketValue: 950
    },
    {
      name: 'RB Leipzig',
      color: '#DB0A40',
      takeoverYear: 2009,
      owner: 'Red Bull GmbH',
      yearsToUCL: 8,
      bestFinish: 4,
      bestFinishYear: '2020',
      totalInvestment: 600,
      uefaRankingBefore: 0,
      uefaRankingAfter: 12,
      ucl2013: 0,
      ucl2014: 0,
      ucl2015: 0,
      ucl2016: 0,
      ucl2017: 0,
      ucl2018: 32,
      ucl2019: 0,
      ucl2020: 4,
      ucl2021: 16,
      ucl2022: 32,
      ucl2023: 16,
      ucl2024: 16,
      totalUCLAppearances: 6,
      avgGoalsScored: 1.7,
      majorTrophiesWon: 0,
      revenueGrowth: 280,
      transferSpending: 650,
      marketValue: 550
    },
    {
      name: 'Málaga',
      color: '#1B2F4A',
      takeoverYear: 2010,
      owner: 'Sheikh Abdullah Al Thani',
      yearsToUCL: 2,
      bestFinish: 8,
      bestFinishYear: '2013',
      totalInvestment: 150,
      uefaRankingBefore: 0,
      uefaRankingAfter: 43,
      ucl2013: 8,
      ucl2014: 0,
      ucl2015: 0,
      ucl2016: 0,
      ucl2017: 0,
      ucl2018: 0,
      ucl2019: 0,
      ucl2020: 0,
      ucl2021: 0,
      ucl2022: 0,
      ucl2023: 0,
      ucl2024: 0,
      totalUCLAppearances: 1,
      avgGoalsScored: 1.4,
      majorTrophiesWon: 0,
      revenueGrowth: -30,
      transferSpending: 160,
      marketValue: 25
    }
  ];
  
  // Convertir les codes de progression en valeurs numériques et noms lisibles
  const getProgressionData = () => {
    const seasons = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    
    const convertStageToNumber = (stage) => {
      const stageMap = { 0: 0, 32: 1, 16: 2, 8: 3, 4: 4, 2: 5, 1: 6 };
      return stageMap[stage] || 0;
    };
    
    const convertNumberToStageName = (num) => {
      const stageNameMap = { 0: 'Non qualifié', 1: 'Phase de groupes', 2: '8ème', 3: 'Quart', 4: 'Demi-finale', 5: 'Finaliste', 6: 'Vainqueur' };
      return stageNameMap[num] || 'N/A';
    };
    
    return seasons.map(season => {
      const result = { name: season };
      clubs.forEach(club => {
        const stageKey = `ucl${season}`;
        const stageValue = convertStageToNumber(club[stageKey]);
        result[club.name] = stageValue;
        result[`${club.name}Label`] = convertNumberToStageName(stageValue);
      });
      return result;
    });
  };
  
  // Données pour le graphique radar
  const getRadarData = () => {
    return clubs.map(club => {
      return {
        name: club.name,
        color: club.color,
        "Perf. UCL": normalizeValue(club.bestFinish, 1, 32, 100, 10, true),
        "Investissement": normalizeValue(club.totalInvestment, 150, 2100, 10, 100),
        "Trophées": normalizeValue(club.majorTrophiesWon, 0, 24, 0, 100),
        "Participations": normalizeValue(club.totalUCLAppearances, 1, 17, 10, 100),
        "Croissance": normalizeValue(club.revenueGrowth, -50, 450, 0, 100),
        "Valeur marchande": normalizeValue(club.marketValue, 25, 1300, 10, 100)
      };
    });
  };
  
  // Normaliser les valeurs pour le radar chart
  const normalizeValue = (value, min, max, outMin, outMax, invert = false) => {
    const normalized = ((value - min) / (max - min)) * (outMax - outMin) + outMin;
    return invert ? outMax - normalized + outMin : normalized;
  };
  
  // Données pour le graphique de ROI
  const getROIData = () => {
    return clubs.map(club => {
      const trophyPerInvestment = club.majorTrophiesWon / (club.totalInvestment || 1);
      const uclProgress = club.bestFinish === 1 ? 7 : club.bestFinish === 2 ? 6 : club.bestFinish === 4 ? 5 : club.bestFinish === 8 ? 4 : 3;
      const roiScore = (trophyPerInvestment * 1000) + (uclProgress * 10);
      
      return {
        name: club.name,
        investment: club.totalInvestment,
        trophies: club.majorTrophiesWon,
        roiScore: roiScore,
        labelPosition: club.name === 'Chelsea' ? 'top' : 'right'
      };
    });
  };
  
  // Données pour le graphique de distribution des trophées
  const getTrophyDistribution = () => {
    const totalTrophies = clubs.reduce((acc, club) => acc + club.majorTrophiesWon, 0);
    
    return clubs.map(club => ({
      name: club.name,
      value: club.majorTrophiesWon,
      percentage: Math.round((club.majorTrophiesWon / totalTrophies) * 100)
    }));
  };
  
  // Tooltips personnalisés
  const CustomTooltipProgression = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 bg-white border rounded shadow">
          <p className="font-bold mb-1">Saison {label}-{parseInt(label)+1}</p>
          {payload.map((entry, index) => {
            if (!entry.name.includes('Label')) {
              const labelKey = `${entry.name}Label`;
              const labelData = payload.find(p => p.name === labelKey);
              return (
                <p key={index} style={{ color: entry.stroke }}>
                  {entry.name}: {labelData ? labelData.value : 'N/A'}
                </p>
              );
            }
            return null;
          })}
        </div>
      );
    }
    return null;
  };
  
  const CustomTooltipRadar = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const club = clubs.find(c => c.name === payload[0].payload.name);
      return (
        <div className="p-3 bg-white border rounded shadow">
          <p className="font-bold mb-1">{club.name}</p>
          <p>Meilleure perf. UCL: {club.bestFinish === 1 ? "Vainqueur" : 
                               club.bestFinish === 2 ? "Finaliste" : 
                               club.bestFinish === 4 ? "Demi-finale" : 
                               club.bestFinish === 8 ? "Quart" : "8ème"}</p>
          <p>Investissement: {club.totalInvestment}M€</p>
          <p>Trophées majeurs: {club.majorTrophiesWon}</p>
          <p>Participations UCL: {club.totalUCLAppearances}</p>
        </div>
      );
    }
    return null;
  };
  
  const CustomTooltipROI = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="p-3 bg-white border rounded shadow">
          <p className="font-bold mb-1">{data.name}</p>
          <p>Investissement: {data.investment}M€</p>
          <p>Trophées gagnés: {data.trophies}</p>
          <p>Score ROI: {data.roiScore.toFixed(2)}</p>
          <p>Trophées par 100M€: {(data.trophies/(data.investment/100)).toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Analyse graphique des clubs rachetés en Ligue des Champions</h2>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          <button 
            className={`px-3 py-1 rounded ${activeChart === 'progression' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveChart('progression')}
          >
            Progression
          </button>
          <button 
            className={`px-3 py-1 rounded ${activeChart === 'radar' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveChart('radar')}
          >
            Radar
          </button>
          <button 
            className={`px-3 py-1 rounded ${activeChart === 'roi' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveChart('roi')}
          >
            ROI
          </button>
          <button 
            className={`px-3 py-1 rounded ${activeChart === 'trophies' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveChart('trophies')}
          >
            Trophées
          </button>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded border mb-4">
        {activeChart === 'progression' && (
          <div>
            <h3 className="text-lg font-medium mb-2">Progression en Ligue des Champions par saison</h3>
            <p className="text-sm text-gray-600 mb-4">Ce graphique montre la progression de chaque club en Ligue des Champions depuis 2012-2013, avec les phases atteintes chaque saison.</p>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={getProgressionData()}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis 
                    domain={[0, 6]} 
                    ticks={[0, 1, 2, 3, 4, 5, 6]} 
                    tickFormatter={(value) => {
                      const labels = ['Non qualifié', 'Phase de groupes', '8ème', 'Quart', 'Demi', 'Finaliste', 'Vainqueur'];
                      return labels[value];
                    }} 
                  />
                  <Tooltip content={<CustomTooltipProgression />} />
                  <Legend />
                  {clubs.map((club, index) => (
                    <Line 
                      key={club.name}
                      type="monotone" 
                      dataKey={club.name} 
                      stroke={club.color} 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                  ))}
                  {clubs.map((club, index) => (
                    <Line 
                      key={`${club.name}Label`}
                      type="monotone" 
                      dataKey={`${club.name}Label`} 
                      style={{ display: 'none' }}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
        
        {activeChart === 'radar' && (
          <div>
            <h3 className="text-lg font-medium mb-2">Analyse radar multi-critères</h3>
            <p className="text-sm text-gray-600 mb-4">Ce radar compare les clubs sur 6 dimensions clés: performance UCL, investissement, trophées, participations, croissance des revenus et valeur marchande.</p>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={getRadarData()}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Tooltip content={<CustomTooltipRadar />} />
                  {getRadarData().map((entry, index) => (
                    <Radar 
                      key={entry.name}
                      name={entry.name} 
                      dataKey={(value) => {
                        const keys = ["Perf. UCL", "Investissement", "Trophées", "Participations", "Croissance", "Valeur marchande"];
                        return value[keys[index % keys.length]];
                      }}
                      stroke={entry.color} 
                      fill={entry.color} 
                      fillOpacity={0.6} 
                    />
                  ))}
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
        
        {activeChart === 'roi' && (
          <div>
            <h3 className="text-lg font-medium mb-2">Retour sur investissement (ROI)</h3>
            <p className="text-sm text-gray-600 mb-4">Ce graphique compare l'investissement total (en M€) avec le nombre de trophées gagnés et calcule un score ROI.</p>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getROIData()}
                  margin={{ top