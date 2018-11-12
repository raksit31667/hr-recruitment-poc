import { CandidateStatus } from './candidate-status';
import { University } from './university';

export class Candidate {
  firstName: string;
  lastName: string;
  candidateStatus: CandidateStatus;
  university: University;
  shortlistDate: string;
}
