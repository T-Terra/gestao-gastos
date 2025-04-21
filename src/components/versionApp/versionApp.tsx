import packageJson from "../../../package.json"

export default function VersionApp() {
    return (
        <p className="font-semibold">
            v{packageJson.version}
        </p>
    )
}