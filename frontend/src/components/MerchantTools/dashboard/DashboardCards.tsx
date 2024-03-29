"use client";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const data = [
  {
    icon: <AttachMoneyIcon />,
    label: "Орлого",
    number: "235,000$",
    date: "Өнөөдөр",
  },
  {
    icon: <CalendarTodayOutlinedIcon />,
    label: "Захиалга",
    number: "58",
    date: "Өнөөдөр",
  },
  {
    icon: <PersonOutlinedIcon />,
    label: "Хэрэглэгч",
    number: "980",
    date: "Өнөөдөр",
  },
];

export const DashboardCards = () => {
  return (
    <>
      <div className="w-full justify-between pt-[32px] bg-[#F7F7F8] flex px-6">
        {data.map((item, index) => {
          return (
            <div
              className="flex flex-col bg-[white] w-[30%] py-4 px-8 rounded-2xl gap-[16px]"
              key={index}
            >
              <div className="flex items-center gap-[8px]">
                <p className="w-[25px] h-[25px]">{item.icon}</p>
                <p className="font-semibold text-base">{item.label}</p>
              </div>
              <p className="font-bold text-3xl">{item.number}</p>
              <p className="text-[#5E6166] font-normal text-base">
                {item.date}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
