import { Divider, TextField } from "@mui/material";

const Filter = () => {
    return (
        <>
            <TextField sx={{width: '300px'}} variant='outlined' label='Find your contact by name:' />
            <Divider sx={{margin: '20px auto'}} />
        </>
    );
}

export default Filter;