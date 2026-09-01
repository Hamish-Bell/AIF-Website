import React from 'react';
import './home.css';
import { supabase } from '../../supabaseClient';

function Home() {

    const downloadResume = async () => {

        const code = window.prompt('Enter access code:');

        // User clicked Cancel
        if (code === null) {
            return;
        }

        const { data, error } = await supabase.functions.invoke(
            'download-resume',
            {
                body: {
                    code: code
                }
            }
        );

        if (error) {
            console.error(error);
            alert('That passcode is incorrect! Please try again.');
            return;
        }

        if (data?.error) {
            alert(data.error);
            return;
        }

        if (data?.signedUrl) {
            window.open(data.signedUrl, '_blank');
        }
    };

    return (
        <div className='main'>
            <h1 className='location'>BASED IN ADELAIDE</h1>

            <h1 className='label'>Future Software Engineer</h1>

            <p className='description'>
                Hi, I’m Hamish, I enjoy building new things involving technology.
            </p>

            <div className='Buttons'>
                <div className='resume'>
                    <h1
                        className="downloadText"
                        onClick={downloadResume}
                    >
                        Download Resume
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Home;