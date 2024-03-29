export default function Friend({ friend, onSelectedFriend, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.image} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    Saya berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} berhutang Rp{Math.abs(friend.balance)} ke saya
                </p>
            )}
            {friend.balance === 0 && (
                <p>{friend.name} dan saya tidak mempunyai utang</p>
            )}
            <button className="button" onClick={() => onSelectedFriend(friend)}>
                {isSelected ? "Tutup" : "Pilih"}
            </button>
        </li>
    );
}
