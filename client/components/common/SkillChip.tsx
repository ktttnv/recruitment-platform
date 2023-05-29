import * as React from 'react';

import { Skill } from '../../models/Skill';
import { Chip, Tooltip } from '@mui/material';

interface SkillChipProps {
    skill: Skill;
}

const SkillChip: React.FC<SkillChipProps> = (props: SkillChipProps) => {
    const { skill } = props;

    if (skill.description) {
        return (
            <Tooltip title={skill.description} arrow>
                <Chip label={skill.name} color="primary" size="small" variant="outlined" style={{ margin: '2px' }} />
            </Tooltip>
        );
    }

    return <Chip label={skill.name} color="primary" />;
};

export default SkillChip;
