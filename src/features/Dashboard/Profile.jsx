import { useUser } from "../authentication/useUser";
import Button from "../../ui/Button";
import MiniLoading from "../../ui/MiniLoading";
import { useLogout } from "../authentication/useLogout";
import ProfileProjects from "./ProfileProjects";

function Profile() {
  const { user } = useUser();
  const { logOut, isPending } = useLogout();
  

  const {
    email,
    user_metadata: { fullname, expertiseArr, bio },
  } = user || {};

  return (
    <div className="p-8">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Biography Section */}
        <div className="rounded-xl bg-gray-800/40 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-semibold">Developer Biography</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xl">{fullname || email}</p>
              <Button
                onClick={logOut}
                className="cursor-pointer rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-all hover:bg-red-600"
              >
                {isPending ? <MiniLoading /> : "Sign Out"}
              </Button>
            </div>
            <p className="text-gray-300">
              {bio ||
                "A passionate developer dedicated to creating innovative solutions and delivering exceptional user experiences."}
            </p>
            {expertiseArr && (
              <div>
                <p className="mb-2 text-lg font-medium">Expertise</p>
                <p className="text-gray-300">{expertiseArr.join(", ")}</p>
              </div>
            )}
          </div>
        </div>

        <ProfileProjects />
      </div>
    </div>
  );
}

export default Profile;
