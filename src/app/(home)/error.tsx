"use client";

import { useEffect } from "react";
import {ErrorProps} from '@/components/ui/interface/productos'

export default function Error({ error, reset }: ErrorProps) {

useEffect(() => {
    console.log(error)
}, [])

return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
    <h1>:c</h1>
    <p>Ha ocurrido un error</p>
    <button onClick={reset}>Intentar de nuevo</button>
    </div>
)
}