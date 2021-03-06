import { Button, IconButton, Slider, Select, MenuItem } from '@material-ui/core'
import { Mic, Translate } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import { MainContainer } from '../../containers/MainContainer'
import { TranslateButton } from '../../containers/TranslateButton/TranslateButton'
import audio from '../../service/audio'
import { AudioPlayer } from '../AudioPlayer/AudioPlayer'
import { Langs, TRANSLATE_LANGS } from '../TextAutocomplete/helpers'
import { translate } from './helper'
import { useStyles } from './style'

export const AudioTranslate = () => {
    const classes = useStyles()
    const mediaRecorder: React.MutableRefObject<MediaRecorder | null> = useRef(null)

    const audioEl: React.MutableRefObject<HTMLAudioElement | null> = useRef(null)
    const [audioFile, setAudioFile] = useState<File | null>(null)
    const [lang, setLang] = useState<Langs>('ru')

    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)
    const [responseType, setResponseType] = useState<"text" | "audio">("text")
    const [response, setResponse] = useState<{
        result_variant: string;
        translated_text: string;
        translation_file_url: string;
    } | null>(null)


    const getMediaRecorder = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.start();

        const audioChunks: BlobPart[] | undefined = [];
        mediaRecorder.current.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        mediaRecorder.current.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audioEl.current = audio

            setAudioFile(new File([audioBlob], "audio.wav", { type: "audio/x-wav" }))
        });
    }

    const toggleRecording = async () => {
        if (isRecording)
            mediaRecorder.current?.stop()
        else {
            audioEl.current = null
            setDuration(0)
            await getMediaRecorder()
        }
        setIsRecording(p => !p)
    }

    const playStopAudio = () => {
        if (isPlaying && audioEl.current) {
            audioEl.current.pause()
            audioEl.current.currentTime = 0
        } else if (audioEl.current) {
            audioEl.current.play()
        }
        setIsPlaying(p => !p)
    }
    const handleChangeCurrentTime = (event: React.ChangeEvent<{}>, value: number | number[]) =>
        setCurrentTime(value as number)

    const handleTranslate = async () => {
        try {
            console.log(audioFile)
            const res = await translate(lang, audioFile!, responseType)
            console.log(res)
        } catch (e) {
            console.error(e)
        }
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
        if (audioEl.current) {
            audioEl.current.addEventListener('durationchange', handleListenDuration)
            audioEl.current.addEventListener('timeupdate', handleListenCurrentTume)
        }

        return () => {
            if (audioEl.current) {
                audioEl.current.removeEventListener('durationchange', handleListenDuration)
                audioEl.current.removeEventListener('timeupdate', handleListenCurrentTume)
            }
        }
    }, [audioEl.current])

    // useEffect(() => {
    //     if (audioEl.current && !isRecording) {
    //         audioEl.current.addEventListener('durationchange', handleListenDuration)
    //         audioEl.current.addEventListener('timeupdate', handleListenCurrentTume)
    //     }
    // }, [audioEl.current, isRecording])

    return (
        <MainContainer>
            <Select
                value={lang}
                onChange={(e) => setLang(e.target.value as Langs)}
            >
                {Object.keys(TRANSLATE_LANGS).map(k => (
                    <MenuItem key={k} value={k}>{TRANSLATE_LANGS[k]}</MenuItem>
                ))}
            </Select>
            <div className={classes.form}>
                <div className={classes.input}>
                    <IconButton
                        onClick={toggleRecording}
                    >
                        <Mic color={isRecording ? "secondary" : "inherit"} />
                    </IconButton>

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
                    </>}
                </div>
                <TranslateButton onClick={handleTranslate}>Translate</TranslateButton>
            </div>
            <div className={classes.response_form}>
                {response && <div>
                    {response.result_variant === "text" &&
                        <div>{response.translated_text}</div>
                    }
                    {response.result_variant === "audio" &&
                        <AudioPlayer src={response.translation_file_url} />
                    }
                </div>
                }
            </div>
        </MainContainer >
    )
}
