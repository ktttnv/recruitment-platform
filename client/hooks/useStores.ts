import { useContext, createContext } from 'react';

import VacancyStore from '../stores/VacancyStore';
import CandidateStore from '../stores/CandidateStore';
import SkillStore from '../stores/SkillStore';
import UserStore from '../stores/UserStore';
import RootStore from '../stores/RootStore';
import TaskStore from '../stores/TaskStore';
import CommentStore from '../stores/CommentStore';
import TemplateStore from '../stores/TemplateStore';

export interface Stores {
    vacancyStore: VacancyStore;
    skillStore: SkillStore;
    userStore: UserStore;
    candidateStore: CandidateStore;
    taskStore: TaskStore;
    commentStore: CommentStore;
    templateStore: TemplateStore;
}

export const RootStoreContext = createContext(RootStore);

function useStores(): Stores{
	return useContext(RootStoreContext) as unknown as Stores;
}

export default useStores;
