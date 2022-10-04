import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/sv";

dayjs.extend(relativeTime);
dayjs.locale("sv");
