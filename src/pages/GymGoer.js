import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

export default function GymGoer() {
    return (
        <>
            <BrowserView>
                <p>Hello Desktop!</p>
            </BrowserView>
            <MobileView>
                <p>Hello Mobile!</p>
            </MobileView>
        </>
    )
}