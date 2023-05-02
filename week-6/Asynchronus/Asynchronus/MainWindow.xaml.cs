using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Asynchronus
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            DowloadHtml("http://msdn.microsoft.com");
        }
        public void DowloadHtml(string url)
        {
            var webclient=new WebClient();
            var html = webclient.DownloadString(url);

            using  (var streamWriter = new StreamWriter(@"c:\projects\result.html"))
            {
                streamWriter.WriteLine(html);
            }
        }
    }
}
