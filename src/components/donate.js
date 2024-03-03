import React, { useEffect, useMemo, useRef } from 'react';

const DonateButton = () => {
    const buttonRef = useRef(null);
    // Use useRef to store the counter variable
    const counterRef = useRef(0);

    const generateId = () => {
        return `ID-${++counterRef.current}`; // Increment the counter stored in useRef
    };

    const buttonId = useMemo(generateId, []); // No need to include counterRef in the dependency array

    useEffect(() => {
        const button = window.PayPal.Donation.Button({
            env: 'production',
            hosted_button_id: 'PUT_YOUR_BUTTON_ID_HERE',
            image: {
                src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
                alt: 'Donate with PayPal button',
                title: 'PayPal - The safer, easier way to pay online!',
            }
        });
        button.render(`#${buttonRef.current.id}`);
    }, []); // The empty dependency array ensures this effect runs only once

    return (
        <div ref={buttonRef} id={buttonId} />
    );
};

export default DonateButton;
