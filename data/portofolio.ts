import {PortofolioContentProps} from '@components/organism/List/type';

const portofolio: PortofolioContentProps[] = [
    {
        title : 'SaaS BroilerX',
        link : 'https://saas.broilerx.com',
        image : '/img/broilerx.webp',
        description : 'BroilerX is a startup who focused in industry a chciken farming, this SaaS for use to manage poultry farms and stock feed.',
        tags : [
            {
                tag: 'GraphQL'
            },
            {
                tag: 'React Js'
            },
            {
                tag : 'Express Js'
            }
        ]
    },
    {
        title : 'Public Safety Center',
        link : 'http://psc.mlsn.tech/login',
        image : '/img/psc.webp',
        description : 'Public safety center is a system that connects the community to the hospital, the community can make a report directly in the event of an accident and will be directly connected to the hospital and officers will immediately come to the scene',
        tags : [
            {
                tag: 'Laravel'
            },
            {
                tag: 'Restful API'
            },
            {
                tag : 'MySQL'
            }
        ]
    },
    {
        title : 'EventIn',
        link : 'https://eventin-dev.herokuapp.com',
        image : '/img/eventin.webp',
        description : 'EventIn is a website that is used for my final project and collaborates with Gamatehcno for work and development.',
        tags : [
            {
                tag: 'Final Project'
            },
            {
                tag: 'React'
            },
            {
                tag : 'Redux'
            },
            {
                tag : 'Laravel'
            },
            {
                tag : 'PostgreSQL'
            }
        ]
    },
    {
        title : 'Menara Ilmu',
        link : 'https://perpajakan.sv.ugm.ac.id/',
        image : '/img/perpajakan.webp',
        description : 'The science tower is a learning tool from the UGM website channel, containing material on taxation and some information about taxes.',
        tags : [
            {
                tag: 'Wordpress'
            }
        ]
    },
    {
        title : 'Information System Kopaja(Kompas Pajak Ajaib)',
        image : '/img/kopaja.webp',
        link : 'https://kopaja.id/',
        description : 'The Kopaja Information System is an information system for learning facilities for high school students regarding taxation, contains material and practice exercises about taxes in it.',
        tags : [
            {
                tag: 'Laravel'
            },
            {
                tag: 'MySQL'
            }
        ]
    },
    {
        title : 'Information System PSKS',
        link : 'https://github.com/vickyhermawan/psks-magang',
        image : '/img/psks.webp',
        description : 'PSKS is an information system used by the Ministry of Social Affairs to collect data on the community environment.',
        tags : [
            {
                tag: 'Laravel'
            },
            {
                tag: 'MySQL'
            }
        ]
    }
]

export default portofolio;
