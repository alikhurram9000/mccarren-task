import './RedactView.styles.css'
import { useState } from 'react'
import { runRedaction } from '../../word/redact'
import { Status } from '../../types'
import { REDACT_VIEW_TEXT } from '../../utils/constants'

const RedactView = () => {

    const [status, setStatus] = useState<Status>({
        type: 'idle',
        message: REDACT_VIEW_TEXT.status.idle
    })

    const onRun = async () => {
        setStatus({ type: 'running', message: REDACT_VIEW_TEXT.status.running })
        try {
            const result = await runRedaction()
            setStatus({
                type: 'ok',
                message: REDACT_VIEW_TEXT.status.success(result.headerAdded, result.redactions)
            })
        } catch (e: any) {
            setStatus({
                type: 'error',
                message: REDACT_VIEW_TEXT.status.error(e?.message)
            })
        }
    }

    return (
        <section className='card'>
            <button
                className='btn'
                onClick={onRun}
                disabled={status.type === 'running'}
            >
                {status.type === 'running'
                    ? REDACT_VIEW_TEXT.button.running
                    : REDACT_VIEW_TEXT.button.idle}
            </button>
            <div className={`status ${status.type}`}>{status.message}</div>
        </section>
    )
}

export { RedactView }