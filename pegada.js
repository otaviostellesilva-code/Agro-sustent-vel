// --- SISTEMA DE NAVEGAÇÃO DA PÁGINA ---
function navegar(id, btn) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- LÓGICA DA CALCULADORA HÍDRICA ---
function calcularPegada(e) {
    e.preventDefault();
    
    // Captura de valores da dimensão doméstica
    const b = parseFloat(document.getElementById('banho').value) || 0;
    const t = parseFloat(document.getElementById('torneira').value) || 0;
    const lavCarro = parseFloat(document.getElementById('lavagem-carro').value) || 0;
    const maqRoupa = parseFloat(document.getElementById('maquina-roupa').value) || 0;

    // Captura de valores da dimensão agroindustrial
    const c = parseFloat(document.getElementById('carne').value) || 0;
    const r = parseFloat(document.getElementById('roupas').value) || 0;
    const en = parseFloat(document.getElementById('energia').value) || 0;
    const lat = parseFloat(document.getElementById('laticinios').value) || 0;
    const desp = parseFloat(document.getElementById('desperdicio').value) || 0;

    // Fórmulas de cálculo de gastos diários
    const gastoBanho = b * 9;
    const gastoTorneira = t * 6;
    const gastoCarro = (lavCarro * 216) / 30;
    const gastoMaquina = (maqRoupa * 135) / 7;
    
    const gastoRoupas = (r * 2500) / 30;
    const gastoEnergia = (en * 4) / 30;
    const gastoCarne = (c * 2100) / 7;
    const gastoLaticinios = (lat * 500) / 7;
    const gastoDesperdicio = desp * 300;

    // Cálculo Total Consolidade
    const total = Math.round(
        gastoBanho + gastoTorneira + gastoCarro + gastoMaquina + 
        gastoRoupas + gastoEnergia + gastoCarne + gastoLaticinios + gastoDesperdicio
    );
    
    // Exibição dos Resultados na Interface
    document.getElementById('result-card').style.display = 'block';
    document.getElementById('total-litros').innerText = total.toLocaleString('pt-BR') + ' L / dia';
    
    const feedback = document.getElementById('feedback-text');
    const dicas = document.getElementById('lista-dicas');
    
    if(total > 3800) {
        feedback.innerText = "ALERTA: Seu impacto hídrico está acima da capacidade de renovação sustentável per capita.";
        dicas.innerHTML = "<strong>Ações Urgentes:</strong><ul><li>Reduzir o consumo de carne e laticínios em apenas 2 dias da semana poupa mais água do que dezenas de banhos rápidos.</li><li>Lave roupas na máquina apenas quando atingir a capacidade máxima do eletrodoméstico.</li><li>Evite o desperdício de comida planejando as porções; descartar alimentos é jogar água limpa fora.</li></ul>";
    } else {
        feedback.innerText = "PARABÉNS: Você demonstra um perfil de consumo equilibrado e consciente.";
        dicas.innerHTML = "<strong>Como Melhorar ainda mais:</strong><ul><li>Divulgue o conceito de Pegada Cinza e Água Virtual entre seus conhecidos.</li><li>Se possível, capture água da chuva ou reutilize a água de descarte da máquina para lavar calçadas.</li></ul>";
    }
    document.getElementById('result-card').scrollIntoView({ behavior: 'smooth' });
}

// --- SISTEMA DO SIMULADOR (JOGO) ---
const questoes = [
    {
        q: "Uma seca severa atinge a região. Como você adapta sua produção agrícola?",
        opts: [
            { t: "Instalo irrigação por gotejamento subterrâneo e sensores de umidade.", s: 15, w: 100, f: "Excelente! A Embrapa confirma que o gotejamento reduz em até 40% a pegada azul." },
            { t: "Mantenho a irrigação por aspersão convencional para garantir a colheita rápida.", s: -25, w: 4000, f: "Perigo! A aspersão sob sol forte perde até 30% da água por evaporação antes de atingir a raiz." }
        ]
    },
    {
        q: "Você precisa escolher um fornecedor de matéria-prima. Qual o critério decisivo?",
        opts: [
            { t: "Fornecedor com certificação de pegada hídrica e tratamento de efluentes.", s: 20, w: 200, f: "Fabuloso! Isso reduz drasticamente a pegada cinza do seu produto final." },
            { t: "Fornecedor com o menor custo logístico, independente da gestão ambiental.", s: -20, w: 8000, f: "Ética em risco! O baixo custo muitas vezes esconde crimes ambientais contra bacias hidrográficas." }
        ]
    }
];

let curIdx = 0; 
let gScore = 100; 
let gWater = 0;

function iniciarJogo() { 
    curIdx = 0; 
    gScore = 100; 
    gWater = 0; 
    atualizarPainel(); 
    mostrarQuestao(); 
}

function atualizarPainel() { 
    document.getElementById('game-score').innerText = gScore; 
    document.getElementById('game-water').innerText = gWater.toLocaleString('pt-BR'); 
}
 
function mostrarQuestao() {
    const container = document.getElementById('game-options-container');
    const feedback = document.getElementById('game-feedback');
    const next = document.getElementById('next-btn');
    feedback.style.display = 'none'; 
    next.style.display = 'none';
    
    if(curIdx >= questoes.length) { 
        document.getElementById('game-question').innerText = "Simulação Finalizada: Você concluiu a análise do ciclo de gestão!"; 
        container.innerHTML = ""; 
        return; 
    }
    
    const q = questoes[curIdx];
    document.getElementById('game-question').innerText = q.q;
    container.innerHTML = '';
    
    q.opts.forEach(o => {
        const b = document.createElement('button');
        // Estilização aplicada dinamicamente nas opções do game
        b.style.padding = "18px"; 
        b.style.borderRadius = "15px"; 
        b.style.border = "1px solid #ddd"; 
        b.style.cursor = "pointer"; 
        b.style.fontWeight = "bold"; 
        b.style.fontSize = "1rem";
        b.innerText = o.t;
        
        b.onclick = () => {
            gScore += o.s; 
            gWater += o.w; 
            atualizarPainel();
            feedback.innerText = o.f; 
            feedback.style.display = 'block';
            feedback.style.background = o.s > 0 ? '#e8f5e9' : '#ffebee';
            next.style.display = 'block';
            document.querySelectorAll('#game-options-container button').forEach(bt => bt.disabled = true);
        };
        container.appendChild(b);
    });
}

function proximaQuestao() { 
    curIdx++; 
    mostrarQuestao(); 
}
