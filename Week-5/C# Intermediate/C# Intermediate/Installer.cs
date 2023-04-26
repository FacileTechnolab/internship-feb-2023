namespace C__Intermediate
{
    public class Installer
        {
        private readonly Composition _logger;
        public Installer(Composition logger) 
            {
            _logger = logger;
            }
        public void Install() 
            {
            _logger.Log("We are the installing the application");
            }
        }
}
