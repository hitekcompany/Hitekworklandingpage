import { Activity, Clock, ShieldCheck, ArrowDown } from 'lucide-react';

export function TransitionSection() {
  const principles = [
    {
      icon: Activity,
      title: 'Tín hiệu vận hành thời gian thực',
      description: 'Nắm bắt từng hành động, từng thay đổi ngay khi chúng diễn ra',
      gradient: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-300',
      glowColor: 'hover:shadow-blue-200'
    },
    {
      icon: Clock,
      title: 'Truy vết: ai / khi nào / tại sao',
      description: 'Mọi quyết định đều có timeline và ngữ cảnh đầy đủ',
      gradient: 'from-purple-50 to-purple-100',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-300',
      glowColor: 'hover:shadow-purple-200'
    },
    {
      icon: ShieldCheck,
      title: 'Hỗ trợ quyết định dựa trên bằng chứng',
      description: 'Thay thế cảm tính bằng dữ liệu và phân tích thực tế',
      gradient: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
      borderColor: 'border-green-300',
      glowColor: 'hover:shadow-green-200'
    }
  ];

  return (
    null
  );
}