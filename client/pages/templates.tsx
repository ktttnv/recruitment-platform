import React, { useEffect, useState } from 'react';

import useStores from '../hooks/useStores';
import CommentsComponent from '../components/common/Comments';
import { Template } from '../models/Template';
import { getFormatingDate } from '../utils/date';

export default function TemplatesPage() {
    const { templateStore, userStore } = useStores() || {};

    const [templates, setTemplates] = useState<Template[]>([]);

    useEffect(() => {
        templateStore?.getTemplates(userStore?.userId).then((resivedTemplates) => {
            setTemplates(resivedTemplates);
        });
    }, [userStore?.userId]);

    return (
        <>
            <p style={{ margin: '0 auto', width: '100%', textAlign: 'center', fontSize: 'xx-large', color: '#003791'}}>Шаблоны</p>
            {templates && <CommentsComponent comments={templates} getDisplayName={getDisplayDataView}></CommentsComponent>}
        </>
    );
}

function getDisplayDataView(template: Template) {
    const { date, type } = template;

    const farmatedDate = getFormatingDate(date);
    
    return `[${farmatedDate}] [${type}]`;
}
