import Image from 'next/image';

import NonExistingPageImage from '../public/404.png';

export default function AnalyticsPage() {
    return (
        <>
            <p style={{ margin: '0 auto', width: '100%', textAlign: 'center', fontSize: 'xx-large', color: '#003791' }}>
                Аналитика
            </p>
            <Image
                src={NonExistingPageImage}
                width={500}
                height={500}
                style={{
                    margin: '0 auto',
                    display: 'flex',
                }}
                alt="NonExistingPageImage"
            />
        </>
    );
}
