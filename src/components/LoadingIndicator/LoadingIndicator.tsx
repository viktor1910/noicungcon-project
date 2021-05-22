import { Backdrop } from "@material-ui/core"
import { CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

interface LoadingIndicatorProps {
    open: boolean
}

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.common.white
    }
}))
const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ open }) => {
    const classes = useStyles()
    return (
        <Backdrop open={open} className={classes.backdrop}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default LoadingIndicator
