export default function ReviewerProfile({ reviewerName }) {
  let profileLetters = "";
  const names = reviewerName.split(" ");

  if (names.length > 1) {
    profileLetters = names[0][0] + names[1][0];
  } else {
    profileLetters = names[0][0];
  }

  return (
    <div className="flex gap-3 items-center">
      <p className="w-10 h-10 flex items-center  justify-center bg-warm-600 rounded-full font-semibold text-lg">
        {profileLetters}
      </p>
      <div>
        <p className="font-medium">{reviewerName}</p>
      </div>
    </div>
  );
}
