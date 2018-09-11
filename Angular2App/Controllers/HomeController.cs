using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.Data.Entity;
using Angular2App.Models;
using System.Data.OleDb;
using System.Web.Script.Serialization;

namespace Angular2App.Controllers
{
    public class HomeController : Controller
    {
        private DataContext db = new DataContext();

        public ActionResult Index()
        {
            return View("Index");
        }

        public ActionResult ControlPanel()
        {
            return View(db.Points.ToList());
        }

        public ActionResult Map()
        {
            return View(db.Points.ToList());
        }

        public ActionResult AdminPanel()
        {
            return View(db.Users.ToList());
        }

        public ActionResult Join()
        {
            return View("ToRegister");
        }

        public ActionResult Article()
        {
            return View("Article");
        }

        public ActionResult Graphs()
        {
            return View("Graphs");
        }

        public ActionResult JoinUs()
        {
            return View("Register");
        }

        public ActionResult Enter()
        {
            return View("Login");
        }
        public ActionResult Launch()
        {
            return View("Launch");
        }
        public ActionResult Stats()
        {
            ViewBag.Users = db.Users.Count();
            ViewBag.Points = db.Points.Count();
            /*int count = 0;
            using (var reader = new StreamReader(Server.MapPath("/Content/jsonData.json")))
            {
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();
                    if (line.StartsWith("\t\t"))
                        count++;
                }
            }
            ViewBag.Points = count;*/
            return View("Stats");
        }
        public ActionResult AuthBlock()
        {
            return View("AuthBlock");
        }
        public ActionResult SubmitBlock()
        {
            return View("SubmitBlock");
        }
        /*public ActionResult ReduceNoise(string fileSelect, string passesSelect)
        {
            string allPath = Server.MapPath("/Uploads/" + fileSelect + ".csv");
            string fileName = Path.GetFileName(allPath);
            string directoryName = Path.GetDirectoryName(allPath);
            String constr = "Provider=Microsoft.Jet.OleDb.4.0;Data Source=" +
                               directoryName +
                               ";Extended Properties='Text;HDR=YES;FMT=Delimited';";
            OleDbConnection con = new OleDbConnection(constr);
            con.Open();
            Int64[] values = null;
            var list1 = new List<Int64>();
            string[] names = { "LPG", "Smoke", "Air", "Other", "CO" };
            for (int f = 0; f < Convert.ToInt32(passesSelect); f++)
            {
                for (int j = 0; j < names.Length; j++)
                {
                    OleDbCommand oconn = new OleDbCommand("Select " + names[j] + " From [" + fileName + "]", con);
                    var reader = oconn.ExecuteReader();
                    while (reader.Read())
                    {
                        list1.Add(Convert.ToInt64(reader[0]));
                    }
                    values = list1.ToArray();

                    OleDbCommand oconn2 = new OleDbCommand("Update [" + fileName + "] set " + names[j] + "=" + values[0] + " where Id=" + 1 + "", con);
                    oconn2.ExecuteScalar();
                    for (int i = 1; i < values.Length - 1; i++)
                    {
                        values[i] = (values[i - 1] + values[i] + values[i + 1]) / 3;
                        OleDbCommand oconn3 = new OleDbCommand("Update [" + fileName + "] set " + names[j] + "=" + values[i] + " where Id=" + (i + 1) + "", con);
                        oconn3.ExecuteScalar();
                    }
                    OleDbCommand oconn4 = new OleDbCommand("Update [" + fileName + "] set " + names[j] + "=" + values[values.Length - 1] + " where Id=" + (values.Length - 1) + "", con);
                    oconn4.ExecuteScalar();

                    reader.Close();
                }
            }
            return View("AdminPanel");
        }*/
        public ActionResult ChooseFile(string fileSelect, string passesSelect)
        {
            string allPath = Server.MapPath("/Uploads/" + fileSelect + ".csv");
            Session["allPath"] = allPath;
            string fileName = Path.GetFileName(allPath);
            string directoryName = Path.GetDirectoryName(allPath);

            using (StreamReader sr = new StreamReader(allPath))
            {
                //while (!sr.EndOfStream)
                //{
                    string[] col = sr.ReadLine().Split(',');
                    for (int i = 0; i < col.Length; i++)
                    {
                        Session["Columns"] += "<option value='" + col[i] + "'>" + col[i] + "</option>";
                    }
                //}
            }

            return View("ControlPanel", db.Points.ToList());
        }
        public ActionResult ChooseColumn(string columnSelect)
        {
            Session["column"] = columnSelect;
            int columnNum = 0;

            //Getting chosen column number
            using (StreamReader sr = new StreamReader(Session["allPath"].ToString()))
            {
                string[] col = sr.ReadLine().Split(',');
                for (int i = 0; i < col.Length; i++)
                {
                    if (col[i] == Session["column"].ToString())
                    {
                        columnNum = i;
                        break;
                    }
                }

            }
            Session["columnNum"] = columnNum;

            //Getting the values from selected column
            using (StreamReader sr = new StreamReader(Session["allPath"].ToString()))
            {
                Session["ColumnO"] = "";
                sr.ReadLine();
                while (!sr.EndOfStream)
                {
                string[] col = sr.ReadLine().Split(',');
                    Session["ColumnO"] += " " + col[columnNum];
                }
            }

            return View("ControlPanel", db.Points.ToList());
        }
        public ActionResult ReduceNoise()
        {
            Int32[] values = null;
            var list1 = new List<Int32>();
            using (StreamReader sr = new StreamReader(Session["allPath"].ToString()))
            {
                sr.ReadLine();
                while (!sr.EndOfStream)
                {
                    string[] col = sr.ReadLine().Split(',');
                    list1.Add(Convert.ToInt32(col[Convert.ToInt32(Session["columnNum"])]));
                }
            }
            values = list1.ToArray();

            for (int i = 1; i < values.Length-1; i++)
            {
                values[i] = (values[i - 1] + values[i + 1])/2;
            }
            Session["ColumnResultArr"] = values;
            Session["ColumnResult"] = "";
            for (int i = 0; i < values.Length; i++)
            {
                Session["ColumnResult"] += values[i] + " ";
            }
            return View("ControlPanel", db.Points.ToList());
        }
        public ActionResult DownloadFile(string fileSelect)
        {
            Response.Redirect("/Uploads/" + fileSelect + ".csv");
            return View("AdminPanel");
        }
        [HttpPost]
        public ActionResult Register(string Login, string Password, string Email)
        {
            if (ModelState.IsValid)
            {
                User user = new User()
                {
                    Login = Login,
                    Password = Password,
                    Email = Email,
                    PointsSet = 0
                };
                db.Users.Add(user);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            Session["user"] = Login;
            Session["User"] = "Hi, " + Login;
            return View("Index");
        }

        [HttpPost]
        public ActionResult Login(string Login, string Password)
        {

            User user = db.Users.Find(Login);
            if (user == null || user.Password != Password)
            {
                return View("Error");
            }
            Session["user"] = Login;
            Session["User"] = "Hi, " + Login;
            return RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult Upload(HttpPostedFileBase file)
        {
            HttpCookie selectedPointCookie = new HttpCookie("SelectedPoint");
            selectedPointCookie = Request.Cookies["SelectedPoint"];
            string legitLoc = "";
            for (int i = 0; i < selectedPointCookie.Value.Length; i++)
            {
                if (selectedPointCookie.Value[i] != '{' && selectedPointCookie.Value[i] != '}' && selectedPointCookie.Value[i] != ':' && selectedPointCookie.Value[i] != '"')
                {
                    legitLoc += selectedPointCookie.Value[i];
                }
            }
            string fileName = /*Session["user"].ToString() +*/
            "-" + DateTime.Now.Day + "-" + DateTime.Now.Month + "-" + DateTime.Now.Year + "-" + legitLoc;
            string extension = Path.GetExtension(file.FileName);
            fileName += extension;
            List<string> extensions = new List<string>() { ".txt", ".csv", ".xls", ".xlsx" };
            if (extensions.Contains(extension))
            {
                file.SaveAs(Server.MapPath("/Uploads/" + fileName));
                ViewBag.Message = "Successfully uploaded!";
            }
            else
            {
                ViewBag.Message = "File format not supported";
            }

            return View("Index");
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}