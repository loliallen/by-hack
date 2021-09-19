import { Button, Slider } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { useStyles } from './style'

type Props = {
    src: string
}

export const AudioPlayer: React.FC<Props> = ({
    src
}) => {
    const classes = useStyles()
    const audioEl = useRef<HTMLAudioElement>(null)

    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)


    const handleChangeCurrentTime = (event: React.ChangeEvent<{}>, value: number | number[]) =>
        setCurrentTime(value as number)


    const playStopAudio = () => {
        if (isPlaying && audioEl.current) {
            audioEl.current.pause()
            audioEl.current.currentTime = 0
        } else if (audioEl.current) {
            audioEl.current.play()
        }
        setIsPlaying(p => !p)
    }


    function handleListenDuration(this: HTMLAudioElement, e: Event) {
        if (this.duration !== Infinity) {
            console.log(this.duration)
            setDuration(this.duration)
        }
    }
    function handleListenCurrentTume(this: HTMLAudioElement, e: Event) {
        setCurrentTime(this.currentTime)
    }

    useEffect(() => {
        if (src && audioEl.current) {
            audioEl.current.src = src
            audioEl.current.addEventListener('durationchange', handleListenDuration)
            audioEl.current.addEventListener('timeupdate', handleListenCurrentTume)
        }
        return () => {
            if (audioEl.current) {
                audioEl.current.removeEventListener('durationchange', handleListenDuration)
                audioEl.current.removeEventListener('timeupdate', handleListenCurrentTume)
            }
        }
    }, [src])

    return (
        <div>
            {audioEl.current && <>
                <Slider
                    className={classes.slider}
                    value={currentTime}
                    valueLabelDisplay="auto"
                    max={duration}
                    min={0}
                    step={0.01}
                    onChange={handleChangeCurrentTime}
                />
                <Button color="primary" onClick={playStopAudio}>{isPlaying ? "Stop" : "Play"}</Button>
                <audio hidden ref={audioEl}></audio>
                <a href={src} download>Скачать</a>
            </>
            }
        </div>
    )
}
