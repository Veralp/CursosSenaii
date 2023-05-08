import desenvolvimento from '../../assets/avatar/desenvolvimento.png';
import eletronica from '../../assets/avatar/eletronica.png';
import robotica from '../../assets/avatar/robotica.png';
import excel from '../../assets/avatar/excel.png';

export const modalidades = [
    "Técnico",
    "FIC",
    "CAI"
]

const cursos = [
    {
        tipo: "Técnico",
        descricao: 'Desenvolver sistemas computacional',
        nome: 'Desenvolvimentomde sistemas',
        duracao: 'Duração 1200 horas',
        valor: 'Free',
        img:desenvolvimento,
        link:'https://jaguariuna.sp.senai.br/curso/97012/513/tecnico-em-desenvolvimento-de-sistemas',
    },
    {
        tipo: 'Técnico',
        descricao: 'Aprender interpretar circuitos e diagramas eletricos',
        nome: 'Eletronica',
        duracao: 'Duração 1200 horas',
        valor: 'Free',
        img:eletronica,
        link:'https://jaguariuna.sp.senai.br/curso/99286/513/tecnico-em-eletronica',
    },
    {
        tipo: 'FIC',
        descricao:'Aprender a lidar com a linguagem de códigos e dominar seus fundamentos, os alunos de robótica trabalham com os mais diversos mecanismos e criam uma série de pequenos robôs automatizados do zero.',
        nome: 'Robótica',
        duracao: 'Duração 100 horas',
        valor: 'Free',
        img:robotica,
        link:'https://jaguariuna.sp.senai.br/cursos/13/899/formacao-inicial-e-continuada?Parent=898',
    },
    {
        tipo: 'CAI',
        descricao: 'O curso de Aprendizagem Industrial Eletricista de Manutenção Eletroeletrônica tem por objetivo proporcionar qualificação profissional na instalação e manutenção de sistemas eletroeletrônicos em baixa tensão, de acordo com normas técnicas, de qualidade, de saúde e segurança no trabalho e de meio ambiente.',
        nome: 'ELETRICISTA DE MANUTENÇÃO ELETROELETRÔNICA',
        duracao: 'Duração 1600 horas',
        valor: 'Free',
        img:eletronica,
        link:'https://jaguariuna.sp.senai.br/curso/94691/513/eletricista-de-manutencao-eletroeletronica',
    },
];
export default cursos;