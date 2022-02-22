import {InputStyle} from '../atoms'
import {TextField} from '@mui/material'

export const Input = ({...props}) => {
    return (
        <InputStyle {...props}>
            <TextField variant='filled'/>
        </InputStyle>
    )
}