const names = [  "Bo", "Maximillian",  "Kai",  "Genevieve",  "Mia",  "Bartholomew",  "Leo",  "Alexandria",  "Ian",  "Christopher",  "Eva",  "Evangeline",  "Ned",  "Penelope",  "Ray",  "Wilhelmina",  "Zoe",  "Sebastian",  "Joy",  "Alexander"
]

function SameLetter() {
    return(
        <div>
            {names.map((name) => (
                <p key={name}>
                    {name}

                    {name[0].toLowerCase() === name[name.length - 1].toLowerCase() && (
                        <span className="m1-2 text-green-500">SAME</span>
                    )}
                </p>
            ))}
        </div>
    )
}

export default SameLetter