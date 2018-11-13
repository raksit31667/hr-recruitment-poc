import { Candidate } from './candidate';
import { CandidateStatus } from './candidate-status';
import { University } from './university';

export const CandidatesData: Candidate[] = [
  {
    firstName: 'Monrada',
    lastName: 'Juycharoen',
    candidateStatus: CandidateStatus.HIRED,
    shortlistDate: '12-10-2018',
    university: University.KMITL
    },
    {
    firstName: 'Heli',
    lastName: 'Tharms',
    candidateStatus: CandidateStatus.NOT_CONSIDERED,
    shortlistDate: '02-22-2018',
    university: University.TU
    },
    {
    firstName: 'Maytha',
    lastName: 'Soontre',
    candidateStatus: CandidateStatus.OFFER_IN_PROGRESS,
    shortlistDate: '08-13-2017',
    university: University.AU
    },
    {
    firstName: 'John',
    lastName: 'Kaves',
    candidateStatus: CandidateStatus.PASSED_INTERVIEW,
    shortlistDate: '09-11-2017',
    university: University.MU
    },
    {
    firstName: 'Kevin',
    lastName: 'Khuen',
    candidateStatus: CandidateStatus.WITHDRAWN_AFTER_INTERVIEW,
    shortlistDate: '06-12-2017',
    university: University.MBU
    },
    {
    firstName: 'Paula',
    lastName: 'Tayler',
    candidateStatus: CandidateStatus.WITHDRAWN_AFTER_INTERVIEW,
    shortlistDate: '11-12-2017',
    university: University.TU
    },
    {
    firstName: 'Nana',
    lastName: 'Rybena',
    candidateStatus: CandidateStatus.PASSED_INTERVIEW,
    shortlistDate: '08-09-2018',
    university: University.CMU
    },
    {
    firstName: 'Simpson',
    lastName: 'Maggie',
    candidateStatus: CandidateStatus.PENDING,
    shortlistDate: '06-14-2018',
    university: University.KU
    },
    {
    firstName: 'Janie',
    lastName: 'Archie',
    candidateStatus: CandidateStatus.ON_HOLD,
    shortlistDate: '09-17-2018',
    university: University.MUIC
    },
    {
    firstName: 'Malee',
    lastName: 'Catt',
    candidateStatus: CandidateStatus.PASSED_INTERVIEW,
    shortlistDate: '03-03-2017',
    university: University.AU
    },
    {
    firstName: 'Sam',
    lastName: 'Smith',
    candidateStatus: CandidateStatus.PASSED_INTERVIEW,
    shortlistDate: '04-11-2018',
    university: University.TU
    },
    {
    firstName: 'Singto',
    lastName: 'Numchok',
    candidateStatus: CandidateStatus.PASSED_INTERVIEW,
    shortlistDate: '05-09-2018',
    university: University.BUU
    },
    {
    firstName: 'Gypsy',
    lastName: 'Keera',
    candidateStatus: CandidateStatus.PASSED_INTERVIEW,
    shortlistDate: '03-07-2018',
    university: University.KU
    },
    {
    firstName: 'Hailee',
    lastName: 'Manchaka',
    candidateStatus: CandidateStatus.OFFER_IN_PROGRESS,
    shortlistDate: '09-15-2017',
    university: University.MUIC
    },
    {
    firstName: 'Amy',
    lastName: 'Mua',
    candidateStatus: CandidateStatus.HIRED,
    shortlistDate: '06-13-2018',
    university: University.CRAS
    },
    {
    firstName: 'Nadine',
    lastName: 'Shamoun',
    candidateStatus: CandidateStatus.WITHDRAWN_AFTER_INTERVIEW,
    shortlistDate: '11-11-2017',
    university: University.KKU
    },
    {
    firstName: 'Arunee',
    lastName: 'Aries',
    candidateStatus: CandidateStatus.WITHDRAWN_AFTER_INTERVIEW,
    shortlistDate: '02-08-2018',
    university: University.KMUTNB
    },
    {
    firstName: 'Nuttapon',
    lastName: 'Teera',
    candidateStatus: CandidateStatus.NOT_CONSIDERED,
    shortlistDate: '11-08-2017',
    university: University.MFU
    },
    {
    firstName: 'Icewa',
    lastName: 'Emika',
    candidateStatus: CandidateStatus.FAILED_INTERVIEW,
    shortlistDate: '06-13-2018',
    university: University.MCU
    },
    {
    firstName: 'Tam',
    lastName: 'Seeracha',
    candidateStatus: CandidateStatus.PENDING,
    shortlistDate: '04-22-2016',
    university: University.KMUTT
    }
];
