import { List, Divider, Box } from "@mui/material";
import CinemaListItem from './CinemaListItem';

const CinemaListAside = ({ cinemas, Header = null }) => {
    return (
        <Box sx={{ maxHeight: 'calc(100vh - 112px)', display: 'flex', flexDirection: 'column' }}>
            {Header && (
                <Box sx={{ flexShrink: 0 }}>
                    <Header {...{ cinemas }} />
                    <Divider />
                </Box>
            )}
            <List sx={{ flex: 1, overflowY: 'auto', pt: 0 }}>
                {cinemas.map((cinema, idx) => (
                    <CinemaListItem {...cinema} key={idx} />
                ))}
            </List>
        </Box>
    )
}
export default CinemaListAside;