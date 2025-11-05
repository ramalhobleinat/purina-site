import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';
import { Progress } from './ui/progress';

export default function MetricCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Total Points */}
      <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center gap-3 mb-3">
          <Award className="w-6 h-6" style={{ color: '#ccb071' }} />
          <h3 style={{ color: '#6F6F6F' }}>Pontos Totais</h3>
        </div>
        <div style={{ color: '#1B1B1B' }}>75 pontos</div>
        <p className="mt-2" style={{ color: '#4A3B00' }}>+12 desde a última semana</p>
      </div>

      {/* Courses Completed */}
      <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="w-6 h-6" style={{ color: '#ccb071' }} />
          <h3 style={{ color: '#6F6F6F' }}>Cursos Concluídos</h3>
        </div>
        <div style={{ color: '#1B1B1B' }}>3 cursos concluídos</div>
        <p className="mt-2" style={{ color: '#6F6F6F' }}>2 em andamento</p>
      </div>

      {/* Referrals */}
      <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center gap-3 mb-3">
          <Users className="w-6 h-6" style={{ color: '#ccb071' }} />
          <h3 style={{ color: '#6F6F6F' }}>Indicações</h3>
        </div>
        <div style={{ color: '#1B1B1B' }}>5 indicações</div>
        <p className="mt-2" style={{ color: '#6F6F6F' }}>15 pontos ganhos</p>
      </div>

      {/* Next Level */}
      <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp className="w-6 h-6" style={{ color: '#ccb071' }} />
          <h3 style={{ color: '#6F6F6F' }}>Próximo Nível</h3>
        </div>
        <div style={{ color: '#1B1B1B' }}>Prata → Ouro</div>
        <div className="mt-3">
          <Progress value={50} className="h-2" />
          <p className="mt-2" style={{ color: '#6F6F6F' }}>75 pontos para o próximo nível</p>
        </div>
      </div>
    </div>
  );
}
