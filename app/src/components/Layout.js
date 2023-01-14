import {getAllApiDatas, getAllPhpDatas} from "../domain/helpers/wordpress_helper";
import GlobalStyles from '@mui/material/GlobalStyles';
import useTheme from '@mui/material/styles/useTheme';

function logInfos(props, display) {
    display && props.forEach((prop => {
        console.log(prop)
    }))
}

export function Layout(props) {
    const theme = useTheme()

    logInfos([
        {theme},
        {"PhpDatas":  getAllPhpDatas(props)},
        {"ApiDatas":  getAllApiDatas()}
    ], true)

    return (
        <>
            <GlobalStyles styles={{
                h1: {...theme.typography.h1},
                h2: {...theme.typography.h2},
                h3: {...theme.typography.h3},
                h4: {...theme.typography.h4},
                h5: {...theme.typography.h5},
                h6: {...theme.typography.h6},
                p: {...theme.typography.body1}
            }}/>
            {props.children}
        </>
    )
}
