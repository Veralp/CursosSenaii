import mecanica  from '../../assets/mecanica.png';
import adm from '../../assets/adm.png';
import excel from '../../assets/avatar/excel.png';

const cursos = [
    {
        tipo: "CAI",
        descricao: 'O Curso de Aprendizagem Industrial Mecânico de Usinagem tem por objetivo proporcionar qualificação profissional na execução de atividades relacionadas à usinagem de peças em materiais ferrosos e não ferrosos, seguindo normas e procedimentos técnicos, de manutenção, segurança, meio ambiente e qualidade.',
        nome: 'Mecanico de usinagem',
        duracao: 'Duração 1600 horas',
        valor: 'Free',
        img:mecanica,
        link:'https://sbc.sp.senai.br/curso/76298/120/mecanico-de-usinagem',
    },
    {
        tipo: 'CAI',
        descricao: 'O Curso de Aprendizagem Industrial Assistente Administrativo tem por objetivo proporcionar qualificação profissional nas atividades de rotinas administrativas no ambiente de trabalho da empresa, seguindo legislação, normas internas e procedimentos técnicos, de qualidade, saúde, segurança e meio ambiente.',
        nome: 'assistente administrativo',
        duracao: 'Duração 400 horas',
        valor: 'Free',
        img:adm,
        link:'https://sbc.sp.senai.br/curso/80528/120/assistente-administrativo',
    },

    {
        tipo: 'CAI',
        descricao: 'O curso de Aprendizagem Industrial Eletricista de Manutenção Eletroeletrônica tem por objetivo proporcionar qualificação profissional na instalação e manutenção de sistemas eletroeletrônicos em baixa tensão, de acordo com normas técnicas, de qualidade, de saúde e segurança no trabalho e de meio ambiente.',
        nome: 'ELETRICISTA DE MANUTENÇÃO ELETROELETRÔNICA',
        duracao: 'Duração 1600 horas',
        valor: 'Free',
        img:excel,
        link:'https://jaguariuna.sp.senai.br/curso/94691/513/eletricista-de-manutencao-eletroeletronica',
    },
];
export default cursos;