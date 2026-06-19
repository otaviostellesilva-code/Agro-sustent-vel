<img width="1049" height="845" alt="image" src="https://github.com/user-attachments/assets/6fe0a2c4-f00c-445a-ada2-ef63f120d946" />

Aqui está um resumo estruturado do código fornecido, que compõe o projeto Portal EcoAgro:

📌 Visão Geral do Projeto
O código representa uma aplicação web interativa completa (HTML, CSS e JavaScript integrados) focada na Sustentabilidade e Gestão de Recursos Hídricos. O portal combina conteúdos teóricos sobre a pegada hídrica com ferramentas práticas e gamificadas para engajar o usuário.

📑 Estrutura e Funcionalidades Principais
O portal é dividido em 4 seções (páginas dinâmicas) gerenciadas por um menu de navegação superior:

1. Fundamentos (#page-intro)
Conteúdo: Explica o conceito de Pegada Hídrica (da Water Footprint Network) e o "Nexo Água-Energia-Alimento".

Classificação Técnica: Apresenta os três tipos de pegada hídrica em cartões coloridos:

🟢 Verde: Água da chuva armazenada no solo (agricultura/florestas).

🔵 Azul: Água de fontes superficiais ou subterrâneas (irrigação/indústria).

⚪ Cinza: Volume necessário para diluir poluentes e readequar a qualidade da água.

2. Ciência do Campo (#page-agro)
Conteúdo: Aborda a inovação hídrica no agronegócio com base em dados da Embrapa, destacando a Irrigação de Precisão e o Sistema de Plantio Direto.

Infográfico de Água Virtual: Apresenta dados de consumo invisível de água por produto:

🥩 Carne Bovina: ~15.415 litros por kg.

📱 Smartphone: ~12.000 litros por unidade.

👕 Calça Jeans: ~10.000 litros por unidade.

☕ Café: ~140 litros por xícara.

3. Métrica Hídrica (#page-calculator)
Funcionalidade: Uma calculadora interativa onde o usuário insere dados de consumo diário direto (banho, torneira) e indireto (carne, roupas novas, energia, desperdício).

Lógica (JS): O script processa as entradas usando fórmulas de médias ponderadas, gera o gasto total em litros por dia e exibe um diagnóstico personalizado (com alertas ou parabéns) acompanhado de dicas de economia.

4. Simulador (#page-game)
Funcionalidade: Um jogo de tomada de decisão baseado em cenários de crise hídrica e gestão.

Métricas do Jogo: O usuário acompanha em tempo real sua Consciência Ética (%) e seu Déficit Hídrico (L) com base nas escolhas feitas, recebendo feedbacks educativos após cada resposta.

🛠️ Aspectos Técnicos do Código
HTML5: Utiliza tags estruturais e semânticas, incorporação de vídeo do YouTube e ícones da biblioteca FontAwesome.

CSS3 (Design Moderno): * Uso de variáveis CSS (:root) para padronização de cores.

Efeito de Glassmorphism (fundo translúcido com backdrop-filter).

Layout responsivo adaptável para celulares através de Media Queries e CSS Grid/Flexbox.

Menu de navegação fixo (position: sticky).

JavaScript (Vanilla): * Gerencia a alternância de abas manipulando classes CSS (.active).

Controla toda a reatividade do jogo e os cálculos matemáticos da pegada hídrica sem necessidade de dependências externas.
