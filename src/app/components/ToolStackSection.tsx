import { CheckSquare, MessageSquare, Mail, FileSpreadsheet, FolderOpen, AlertTriangle } from 'lucide-react';

export function ToolStackSection() {
  const tools = [
    {
      icon: CheckSquare,
      label: 'Task Tools',
      examples: 'Trello / Asana / Jira',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
      iconColor: 'text-blue-600'
    },
    {
      icon: MessageSquare,
      label: 'Chat',
      examples: 'Slack / Zalo / Teams',
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-300',
      iconColor: 'text-purple-600'
    },
    {
      icon: Mail,
      label: 'Email',
      examples: 'Gmail / Outlook',
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-300',
      iconColor: 'text-green-600'
    },
    {
      icon: FileSpreadsheet,
      label: 'Spreadsheets',
      examples: 'Excel / Google Sheets',
      color: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-300',
      iconColor: 'text-emerald-600'
    },
    {
      icon: FolderOpen,
      label: 'Docs / Drive',
      examples: 'Google Drive / OneDrive',
      color: 'from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-300',
      iconColor: 'text-yellow-600'
    }
  ];

  return (
    null
  );
}