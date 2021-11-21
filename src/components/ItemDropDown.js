import {useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/ListItemDropDown.scss'
import {Box} from "@mui/material";
import {useState} from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


function ItemDropDown(props) {
    const theme = useTheme();
    const [operationName, setOperationName] = useState('');
    const [names, setNames] = useState(props.names ? props.names : [])
    const {handleValue, onEmpty} = props

    const handleChange = (event) => {
        setOperationName(event.target.value)
        handleValue(event.target.value)
    };

    const body = () => {
        return (
            <FormControl sx={{m: 1, width: 300}} error={onEmpty}>
                <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={operationName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name"/>}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, operationName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>)
    }

    return (
        <div>
            <Box width={300} textAlign={"center"} fontFamily={"Montserrat"} fontSize={16}>Criterio</Box>
            {body()}

        </div>
    );
}

export default ItemDropDown