const names = [  "Bo", "Maximillian",  "Kai",  "Genevieve",  "Mia",  "Bartholomew",  "Leo",  "Alexandria",  "Ian",  "Christopher",  "Eva",  "Evangeline",  "Ned",  "Penelope",  "Ray",  "Wilhelmina",  "Zoe",  "Sebastian",  "Joy",  "Alexander"
]

function NameList() {
    return (
        <div className="p-5">
            {names.map((name, index) => (
                <p key={name}>
                    {index + 1}. {name}
                </p>
            ))}
        </div>
    )
}

export default NameList