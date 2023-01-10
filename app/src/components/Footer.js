export function Footer(props) {
    const {siteInfos} = props;

    return (
        <footer style={{display: 'flex', justifyContent: 'center', padding: 16}}>
            <p>{`© ${new Date().getFullYear()} ${siteInfos.name}`}</p>
        </footer>
    )
}