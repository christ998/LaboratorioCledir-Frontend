import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/ListItemDropDown.scss'
import {Box} from "@mui/material";
import React from "react";

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

class ItemDropDown extends React.Component {

    // theme = useTheme();

    constructor(props) {
        super(props);
        this.state = {
            operationName: '',
            names: this.props.names ? this.props.names : [],
        }
    }

    reset = () => {
        this.setState({
            operationName: '',
        })
    }

    handleChange = (event) => {
        this.setState({
            operationName: event.target.value
        })
        this.props.handleValue(event.target.value)
    };

    body = () => {
        return (
            <FormControl sx={{m: 1, width: 300}} error={this.props.onEmpty}>
                <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={this.state.operationName}
                    onChange={this.handleChange}
                    input={<OutlinedInput label="Name"/>}
                    MenuProps={MenuProps}
                >
                    {this.props.names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name === 'Genus species' ? 'Species': name}

                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>)
    }

    render() {
        return (
            <div>
                <Box width={300} textAlign={"center"} fontFamily={"Montserrat"} fontSize={16}>Criteria</Box>
                {this.body()}

            </div>
        )
    }

}

export default ItemDropDown