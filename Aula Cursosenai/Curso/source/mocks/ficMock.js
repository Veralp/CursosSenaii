import robotica from '../../assets/avatar/robotica.png';
import industria from '../../assets/industria.png';
import economia from '../../assets/economia.png';

const cursos = [
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
        tipo:'FIC',
        descricao:'Apresentar a Indústria 4.0, propiciando ao aluno a introdução ao tema e a obtenção da base conceitual das tecnologias habilitadoras que suportam a Indústria 4.0.',
        nome: 'Desvendando a industria 4.0',
        duracao: 'Duração 20 horas',
        valor: 'Free',
        img:industria,
        link:'https://sbc.sp.senai.br/curso/86817/120/desvendando-a-industria-40',
        

    },
    {
        tipo:'FIC',
        descricao:'O curso Economia Circular tem como objetivo apresentar o modelo de produção circular, identificando o sistema econômico vigente e compreendendo as formas de transição nas esferas comportamental, empresarial e político-institucional.',
        nome: 'Economia Circular',
        duracao: 'Duração 20 horas',
        valor: 'Free',
        img:economia,
        link:'https://sbc.sp.senai.br/curso/90950/120/economia-circular',
        

    }
];
export default cursos;