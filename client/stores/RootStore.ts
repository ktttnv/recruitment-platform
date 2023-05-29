import VacancyStore from './VacancyStore';
import SkillStore from './SkillStore';
import UserStore from './UserStore';
import CandidateStore from './CandidateStore';
import TaskStore from './TaskStore';
import CommentStore from './CommentStore';
import TemplateStore from './TemplateStore';

export default class RootStore {
    vacancyStore!: VacancyStore;
    skillStore!: SkillStore;
    userStore!: UserStore;
    candidateStore!: CandidateStore;
    taskStore!: TaskStore;
    commentStore!: CommentStore;
    templateStore!: TemplateStore;

    constructor() {
        this.vacancyStore = new VacancyStore();
        this.skillStore = new SkillStore();
        this.candidateStore = new CandidateStore();
        this.taskStore = new TaskStore();
        this.commentStore = new CommentStore();
        this.userStore = new UserStore();
        this.templateStore = new TemplateStore();
    }

    async init() {
        await Promise.all([
            this.userStore.init(),
            this.vacancyStore.init(),
            this.candidateStore.init(),
        ]).then(() => {
            this.taskStore.init(this.userStore.userId);
        }).catch((error) => console.log(`Error occired during initialization RootStore. Error: ${error}`));
    }
}
