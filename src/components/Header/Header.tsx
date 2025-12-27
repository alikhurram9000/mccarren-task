import './Header.styles.css'
import { useCallback, useEffect, useState } from 'react'
import { HEADER_TEXT } from '../../utils/constants'

const Header = () => {

    const [canTrack, setCanTrack] = useState(false)

    const initializeCanTrack = useCallback(() => {
        try {
            setCanTrack(Office.context.requirements.isSetSupported('WordApi', '1.5'))
        } catch {
            setCanTrack(false)
        }
    }, [])

    useEffect(() => {
        Office.onReady(() => {
            initializeCanTrack()
        })
    }, [initializeCanTrack])


    return (
        <header className='top'>
            <div>
                <h1>{HEADER_TEXT.title}</h1>
                <p className='sub'>
                    {HEADER_TEXT.subtitle}
                </p>
            </div>
            <span className={`pill ${canTrack ? 'good' : 'warn'}`}>
                {HEADER_TEXT.trackingApi.label} {canTrack ? HEADER_TEXT.trackingApi.available : HEADER_TEXT.trackingApi.unavailable}
            </span>
        </header>
    )
}

export { Header }