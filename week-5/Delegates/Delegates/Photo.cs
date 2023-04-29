using System.Runtime.Remoting.Messaging;

namespace Delegates
{
    public class Photo
    {
        public static Photo Load(string path)
    {
        return new Photo();
    }
    public void Save() 
    {

    }
} 
}
