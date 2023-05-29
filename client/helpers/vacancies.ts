import { Skill } from '../types/skills';

export function getSkillsNames(skills: Array<Skill>): Array<string> {
    const mainSkills = skills.filter((value) => value.isMain).map((value) => value.name);
    const nonMainSkills = skills.filter((value) => !value.isMain).map((value) => value.name);
    return mainSkills.concat(nonMainSkills);
}
