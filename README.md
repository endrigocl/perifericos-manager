# 📱 Gerenciador de Periféricos

Um aplicativo desktop completo para gerenciar periféricos, cabos e acessórios com banco de dados JSON local.

**Autor**: Endrigo / Driftweb  
**Site**: https://driftweb.com.br  
**Versão**: 1.0.0

---

## ✨ Funcionalidades

✅ **Cadastro de Periféricos**
- Campos opcionais: Marca, Nome, Tipo, Tags, Quantidade, Foto
- Fotos convertidas em Base64
- Banco de dados JSON local

✅ **Gerenciamento**
- Lista com visualização em Tabela ou Grid
- Busca e filtros em tempo real
- Editar periféricos existentes
- Deletar com confirmação

✅ **Relatórios**
- Contagem total de itens
- Estatísticas por tipo
- Estoque total

✅ **Backup**
- Exportar JSON para backup
- Importar JSON para restaurar dados

---

## 🚀 Início Rápido

### Via GitHub Actions (Recomendado - sem precisar instalar nada)

1. Clone o repositório
2. Vá para a aba **"Releases"**
3. Baixe o `.exe` mais recente
4. Execute e pronto! ✅

### Via Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Testar em desenvolvimento
npm start

# Gerar executável
npm run build-win
```

---

## 📁 Estrutura

```
perifericos-manager/
├── main.js              # Lógica do Electron
├── preload.js          # Segurança (IPC)
├── index.html          # Interface web
├── package.json        # Configurações
├── database.json       # Banco de dados
└── .github/workflows/  # GitHub Actions
```

---

## 💾 Banco de Dados

- **Tipo**: JSON
- **Localização**: `C:\Users\[você]\AppData\Roaming\perifericos-manager\database.json`
- **Sincronização**: Em tempo real
- **Persistência**: Permanente (mesmo fechando o app)

---

## 🔧 Tecnologias

- **Electron** - Framework para aplicativos desktop
- **Node.js** - Runtime JavaScript
- **HTML/CSS/JS** - Interface web
- **GitHub Actions** - CI/CD

---

## 📋 Requisitos

- Windows 11 (recomendado)
- Nenhuma dependência adicional necessária

---

## 🐛 Troubleshooting

### Dados não salvam
- Verifique permissões de escrita em AppData
- Reinicie o aplicativo

### Erro ao abrir
- Tente executar como administrador
- Verifique se Windows Defender não está bloqueando

### Problema de permissão
- Clique direito → Executar como administrador

---

## 📞 Suporte

- **Site**: https://driftweb.com.br
- **Desenvolvedor**: Endrigo
- **Issues**: Use a seção "Issues" do GitHub

---

## 📝 Licença

MIT - Livre para usar e modificar

---

**Versão**: 1.0.0  
**Última atualização**: 21/11/2025  
**Status**: Pronto para produção ✅
